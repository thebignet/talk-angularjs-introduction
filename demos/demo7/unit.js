'use strict';
describe('myDemo7', function(){
	var AngularJsIssues, $httpBackend;
    beforeEach(angular.mock.module('myDemo7'));

	beforeEach(function () {
        angular.mock.inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
        });
    });

    describe('controller', function () {
		var scope, ctrl;
        it('should populate issues with server issues', inject(function ($rootScope, $controller) {
            $httpBackend.expectGET('https://api.github.com/repos/angular/angular.js/issues')
                .respond(
                	[
						{
						    "url": "https://api.github.com/repos/angular/angular.js/issues/7352",
						    "labels_url": "https://api.github.com/repos/angular/angular.js/issues/7352/labels{/name}",
						    "comments_url": "https://api.github.com/repos/angular/angular.js/issues/7352/comments",
						    "events_url": "https://api.github.com/repos/angular/angular.js/issues/7352/events",
						    "html_url": "https://github.com/angular/angular.js/pull/7352",
						    "id": 32823332,
						    "number": 7352,
						    "title": "Update cookies.js",
						    "user": {
						      "login": "nathanredblur",
						      "id": 1273018,
						      "avatar_url": "https://avatars.githubusercontent.com/u/1273018?",
						      "gravatar_id": "a9526c03a21db8fc97fae58bcb05ddfa",
						      "url": "https://api.github.com/users/nathanredblur",
						      "html_url": "https://github.com/nathanredblur",
						      "followers_url": "https://api.github.com/users/nathanredblur/followers",
						      "following_url": "https://api.github.com/users/nathanredblur/following{/other_user}",
						      "gists_url": "https://api.github.com/users/nathanredblur/gists{/gist_id}",
						      "starred_url": "https://api.github.com/users/nathanredblur/starred{/owner}{/repo}",
						      "subscriptions_url": "https://api.github.com/users/nathanredblur/subscriptions",
						      "organizations_url": "https://api.github.com/users/nathanredblur/orgs",
						      "repos_url": "https://api.github.com/users/nathanredblur/repos",
						      "events_url": "https://api.github.com/users/nathanredblur/events{/privacy}",
						      "received_events_url": "https://api.github.com/users/nathanredblur/received_events",
						      "type": "User",
						      "site_admin": false
						    }
						}
					]
            	);

			/* Création du nouveau scope et instanciation du controller avec ce scope */
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl', {$scope: scope});

			/* Exécution des requêtes http mock */
            $httpBackend.flush();

            /* Il doit y avoir des issues */
			expect(scope.issues).not.toBeNull();
			expect(scope.issues.length>0).toBe(true);
        }));

	});
});