import Prof from "../models/Profs.mode";
import { errorHandler } from "../utils/error.ts";
import express, { Request, Response, NextFunction } from "express";

type RequestBody = {
  profId: string;
  announId?: string;
  title?: string;
  content?: string;
};

// type RequestBodyD = {
//     profId: string;
//     announId: string;
//   };

type ResponseBody = {
  message: string;
};

export async function announCreate(
  req: Request<{}, {}, RequestBody>,
  res: Response<ResponseBody>,
  next: NextFunction
) {
  try {
    const { profId, title, content } = req.body;
    const existingProf = await Prof.findOne({ _id: profId });

    if (existingProf) {
      const announcement = {
        title,
        content,
        createdAt: new Date(),
      };
      existingProf.announcements.push(announcement);
      await existingProf.save().then(() => {
        res.status(201).json({ message: `${title}+created` });
      });
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
    const { profId } = req.body;

    const lastAnnoun = await Prof.findOne({ _id: profId })
      .sort({ "announcements.createdAt": -1 })
      .limit(1);
    if (!lastAnnoun) {
      next(errorHandler(401, "no announcements found"));
    }
    res.status(201).json({ lastAnnoun });
  } catch (error) {
    next(errorHandler(401, "cant find the professor"));
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
          "announcement.$.title": title,
          "announcement.$.content": content,
        },
      }
    );

    if (!updateAnnoun) {
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
      next(errorHandler(404, "Professor not found"));
    }

    res.status(201).json({ message: "announcemnt deleted" });
  } catch (error) {
    next(error);
  }
}
