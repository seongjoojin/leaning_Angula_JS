# AngularJS 의 개념들

Directives : extend HTML with custom attributes and elements

AngularJS는 HTML 태그들을 직접 정의해서 사용 가능

태그에 있는 속성도 직접정해서 사용할 수 있음

Expressions : access variables and functions form the scope

    <p>hello {{ name }}!</p>
    
Module : a container for the different parts of an app including controllers, services, fitters, directives which configures the injector

기능적으로 비슷한 것들을 모아놓는 

Controller : the business logic behind views

- DOM조작, format input 조작, fitter output(값을 수정하여 보내기) 등에 사용하면 안 됨

Service : reusable business logic independent of views

재사용할 수 있는 비지니스 로직을 Service로 표현됨