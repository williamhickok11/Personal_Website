"use strict";

PersonalSite.factory("UserSearchFactory", ($q, $http) =>
  () =>
    $q((resolve, reject, serachTerm) => // Return a promise for our async XHR
      $http
        .get('http://www.omdbapi.com/?t=${serachTerm}&y=&plot=short&r=json')
        .then(
          searchedMovie => resolve(searchedMovie.data),
          error => reject(error)
        )
    )
);
