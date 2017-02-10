angular.module('homechef.services', [])

.factory('dishService', function ($resource, API_URL) {
  return $resource(API_URL + '/dishes', {}, {
    query: {
      method: "GET",
      isArray: false
    }
  });
})

.factory('orderService', function ($resource, API_URL) {
  return $resource(API_URL + '/orders', {});
});
