---
author: Eric Pritchett
title: AngularJS and the Awsomeness Within
---

# AngularJS
## and the Awsomeness Within 
by Eric Pritchett

---

# Why Another MVC?

> Other frameworks deal with HTML’s shortcomings by either abstracting 
away HTML, CSS, and/or JavaScript or by providing an imperative way 
for manipulating the DOM. Neither of these address the root problem 
that HTML was not designed for dynamic views.

_-- angularjs.com_

---

# The View 

- Display bindings uses handlbars/mustaches
- Input binding uses ng-model


```
&lt;body ng-controller=&quot;LoginController&quot;&gt;
    &lt;form name=&quot;login&quot;&gt;
        &lt;label&gt;User name:&lt;/label&gt;
        &lt;input type=&quot;text&quot; ng-model=&quot;userName&quot; /&gt;
        &lt;label&gt;Password:&lt;/label&gt;
        &lt;input type=&quot;password&quot; ng-model=&quot;password&quot; /&gt;
        &lt;input type=&quot;submit&quot; 
       ng-click=&quot;submit()&quot; value=&quot;Login&quot; /&gt;
    &lt;/form&gt;
&lt;/body&gt;
```

---

# The Controller

- Wire up dependencies 
- Define spefic view behavior

```
angular.module('my-app', [])
.controller('LoginController', 
    function($scope, $location, $http) {
        $scope.submit = function() {
            $http.post('/account/login', {
                userName: $scope.userName,
                password: $scope.password
            }).then(function(resp) {
                if (resp.data.isAuthenticated) {
                    $location.path('/home');
                } else {
                   /* Display errors */
               }
           });
       }
})
```
---

# What's the Big Deal?

- Plain javascript objects
- Builtin dependency injection
- Sweet form validation
- Strong support for testing in all aspects
- Brings features of HTML6 to older browsers 

---

# HTML6

> Imagine being able to mark something up the way you want to mark it up.
Imagine changing &lt;div id=&quot;wrapper&quot;&gt; to &lt;wrapper&gt;
or a better example, making a calendar like:

```
&lt;calendar&gt;
  &lt;month name=&quot;January&quot;&gt;
    &lt;day&gt;1&lt;/day&gt;
    &lt;day&gt;2&lt;/day&gt;
    &lt;day&gt;3&lt;/day&gt;
    &lt;!-- ...and so on --&gt;
  &lt;/month&gt;
&lt;/calendar&gt;
```
_-- html6spec.com_

---

# Angular Directives

- Click and drag
- Expressions 
- watch changes
- fake repeat
- ipaddress validation
