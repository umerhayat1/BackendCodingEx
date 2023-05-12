exports.responses = {
  success(message:String, data = {}) {
    const resp = {
      statusCode: "200",
      message: message,
      data: data,
      success: true,
    };
    return resp;
  },

  error(message:any = null, statusCode = "404") {
    if (message == null) message = "error";
    const resp = { statusCode: statusCode, message: message, success: false };
    return resp;
  },

  failure(message:any, statusCode = "400", data = {}) {
    const resp = {
      statusCode: statusCode,
      message: message,
      data: data,
      success: false,
    };
    return resp;
  },
};
