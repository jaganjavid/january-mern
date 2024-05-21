const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(400);
    next(error);
}

const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode === 500;
    let message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        message: "Resource not found"
    })

}

export {notFound, errorHandler};