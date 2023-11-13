import Prof from "../models/Profs.model.ts";
import { errorHandler } from "../utils/error.ts";
import express, { Request, Response, NextFunction } from "express";

type RequestBody = {
  profId: string;
  course?: string;
  announId?: string;
  title?: string;
  content?: string;
  all?: boolean;
};

// type RequestBodyD = {
//     profId: string;
//     announId: string;
//   };

type ResponseBody = {
  message: string;
};

export function test(
  req: Request<{}, {}, RequestBody>,
  res: Response<ResponseBody>
) {
  res.json({ message: "test" });
}

export async function announCreate(
  req: Request<{}, {}, RequestBody>,
  res: Response<ResponseBody>,
  next: NextFunction
) {
  try {
    const { profId, title, content } = req.body;

    const existingProf = await Prof.findOne({ _id: profId });
    const createdAt: Date = new Date();

    if (existingProf) {
      const announcement = {
        title,
        content,
        createdAt,
      };

      existingProf.announcements.push(announcement);
      // console.log(existingProf.announcements);

      await existingProf
        .save()
        .then(() => {
          res
            .status(201)
            .json({ message: `\`${title}\` announcement is created` });
        })
        .catch((error) => next(errorHandler(404, error)));
    } else {
      next(errorHandler(401, "cant find the professor"));
    }
  } catch (error) {
    next(error);
  }
}

export async function announGet(
  req: Request<{}, {}, RequestBody>,
  res: Response<any>,
  next: NextFunction
) {
  try {
    const { profId, all } = req.body;

    const lastAnnoun = await Prof.findOne(
      { _id: profId },
      { announcements: { $slice: -1 } }
    );

    if (!lastAnnoun) {
      next(errorHandler(401, "no announcements found"));
    }

    if (all) {
      res.status(201).json(lastAnnoun?.announcements);
    } else {
      res.status(201).json(lastAnnoun?.announcements[0]);
    }
  } catch (error) {
    next(errorHandler(401, "cant find the professor"));
  }
}

export async function announGetAll(
  req: Request<{}, {}, RequestBody>,
  res: Response<any>,
  next: NextFunction
) {
  try {
    const announsData = await Prof.find({}, { announcements: { $slice: -1 } });
    const containsAnnouns = Object.keys(announsData).includes("announcements");
    if (!announsData || containsAnnouns) {
      next(errorHandler(401, "no announcements found"));
    }

    res.status(201).json(announsData);
  } catch (error) {
    next(errorHandler(401, "cant find the Teacher"));
  }
}

export async function announUpdate(
  req: Request<{}, {}, RequestBody>,
  res: Response<ResponseBody>,
  next: NextFunction
) {
  try {
    const { profId, announId, title, content } = req.body;

    const updateAnnoun = await Prof.updateOne(
      { _id: profId, "announcements._id": announId },
      {
        $set: {
          "announcements.$.title": title,
          "announcements.$.content": content,
        },
      }
    );

    if (!updateAnnoun || !updateAnnoun.acknowledged) {
      next(errorHandler(404, "Professor or announcement not found "));
    }

    res.status(201).json({ message: "Announcement updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function announDelete(
  req: Request<{}, {}, RequestBody>,
  res: Response<ResponseBody>,
  next: NextFunction
) {
  try {
    const { profId, announId } = req.body;
    const delteAnnoun = await Prof.findOneAndUpdate(
      { _id: profId },
      { $pull: { announcements: { _id: announId } } },
      { new: true }
    );

    if (!delteAnnoun) {
      next(errorHandler(404, "Professor is not found"));
    }

    res.status(201).json({ message: "announcemnt is deleted" });
  } catch (error) {
    next(error);
  }
}
