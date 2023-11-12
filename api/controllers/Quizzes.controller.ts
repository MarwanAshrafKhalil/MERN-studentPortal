import Course from "../models/Courses.model.ts";
import { errorHandler } from "../utils/error.ts";
import express, { Request, Response, NextFunction } from "express";

interface quizBody {
  question: string;
  answers: string[];
  correctAnswer: number;
}

type RequestBody = {
  courseId: string;
  quizId?: string;
  all?: boolean;
  index?: number;
};

type RequestBodyCU = {
  courseId: string;
  quizId: string;
  name: string;
  topic: string;
  dueDate: Date;
  isAvailable: boolean;
  content: quizBody[];
};

type ResponseBody = {
  message: string;
};

export function test(
  req: Request<{}, {}, RequestBody>,
  res: Response<ResponseBody>
) {
  res.json({ message: "test" });
}

export async function quizCreate(
  req: Request<{}, {}, RequestBodyCU>,
  res: Response<ResponseBody>,
  next: NextFunction
) {
  try {
    const { courseId, name, topic, dueDate, isAvailable, content } = req.body;

    const existingCourse = await Course.findOne({ _id: courseId });
    const createdAt: Date = new Date();

    if (existingCourse) {
      const quiz = {
        name,
        topic,
        createdAt,
        dueDate,
        isAvailable,
        content,
      };

      await Course.updateOne({ _id: courseId }, { $push: { quizzes: quiz } })
        .then(() => {
          res
            .status(201)
            .json({ message: `\`${name} - ${topic}\` quiz is created` });
        })
        .catch((error) => next(errorHandler(404, error)));
      //   existingCourse.quizzes.push(quiz);
      //   console.log(existingCourse.quizzes);

      //   await existingCourse
      //     .save()
      //     .then(() => {
      //       res
      //         .status(201)
      //         .json({ message: `\`${name} - ${topic}\` quiz is created` });
      //     })
      //     .catch((error) => next(errorHandler(404, error)));
    } else {
      next(errorHandler(401, "cant find the course"));
    }
  } catch (error) {
    next(error);
  }
}

export async function quizGet(
  req: Request<{}, {}, RequestBody>,
  res: Response<any>,
  next: NextFunction
) {
  try {
    const { courseId, all, index } = req.body;

    const quizzesData = await Course.findOne(
      { _id: courseId }
      //   { quizzes: { $slice: -1 } } //need to re check this line in both controls
    );

    if (!quizzesData) {
      next(errorHandler(401, "no quizzes found"));
    }

    if (all) {
      res.status(201).json(quizzesData?.quizzes);
    } else if (index) {
      res.status(201).json(quizzesData?.quizzes[index]);
    } else {
      res.status(201).json(quizzesData?.quizzes[0]);
    }
  } catch (error) {
    next(errorHandler(401, "cant find the course"));
  }
}

export async function quizGetAll(
  req: Request<{}, {}, RequestBody>,
  res: Response<any>,
  next: NextFunction
) {
  try {
    const { courseId, all, index } = req.body;

    const quizzesData = await Course.find({});

    const containsQuizzes = quizzesData.some(
      (item) => Array.isArray(item.quizzes) && item.quizzes.length > 0
    );
    if (!quizzesData || containsQuizzes) {
      next(errorHandler(401, "no quizzes found"));
    }

    // console.log(containsQuizzes);

    const quizzes = quizzesData.map((doc) => {
      return doc.toObject().quizzes.map((quiz) => {
        return { ...quiz, courseName: doc.name };
      });
    });
    // const quizzes = quizzesData.map((doc) => {
    //   return {
    //     ...doc.quizzes,
    //     courseName: doc.name,
    //   };
    // });
    // console.log(quizzes);

    res.status(201).json(quizzes);
  } catch (error) {
    next(errorHandler(401, "cant find the course"));
  }
}

export async function quizUpdate(
  req: Request<{}, {}, RequestBodyCU>,
  res: Response<ResponseBody>,
  next: NextFunction
) {
  try {
    const { courseId, name, topic, quizId, dueDate, isAvailable, content } =
      req.body;
    const createdAt: Date = new Date();

    const updateQuiz = await Course.updateOne(
      { _id: courseId, "quizzes._id": quizId },
      {
        $set: {
          "quizzes.$.name": name,
          "quizzes.$.topic": topic,
          "quizzes.$.createdAt": createdAt,
          "quizzes.$.dueDate": dueDate,
          "quizzes.$.isAvailable": isAvailable,
          "quizzes.$.content": content,
        },
      }
    );

    console.log(updateQuiz);

    if (!updateQuiz || !updateQuiz.acknowledged) {
      next(errorHandler(404, "Course or quiz not found "));
    }

    res.status(201).json({ message: "Quiz updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function quizDelete(
  req: Request<{}, {}, RequestBody>,
  res: Response<ResponseBody>,
  next: NextFunction
) {
  try {
    const { courseId, quizId } = req.body;
    const delteQuiz = await Course.findOneAndUpdate(
      { _id: courseId },
      { $pull: { quizzes: { _id: quizId } } },
      { new: true }
    );

    if (!delteQuiz) {
      next(errorHandler(404, "Course is not found"));
    }

    res.status(201).json({ message: "quiz is deleted" });
  } catch (error) {
    next(error);
  }
}
