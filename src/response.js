class Response {

  getResultsCount(response) {
    return response.meta.total;
  }

  getDoctors(response) {
    return response.data;
  }

}

export { Response };
