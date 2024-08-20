const responseSuccess = (req, res, resObject = [], message = "", status = true, statusCode = 200) => {
    let responseObject = {
        status: "seuccess",
        message,
        body: resObject, 
    }
    return res.status(statusCode).json(responseObject);
}
const responseError = (req, res, errorObject = [], message = "", status = false, statusCode = 500) => {
    let responseObject = {
        status: "error",
        message,
        // body: resObject, 
    }
    return res.status(statusCode).json(responseObject);
}

module.exports = {
    responseSuccess,
    responseError
}