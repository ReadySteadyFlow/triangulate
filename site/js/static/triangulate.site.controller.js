// page controller
.controller('{{ctrl}}Ctrl', function($scope, $location, $rootScope) {

	// set user
	$scope.user = $rootScope.user;
	
	// set page variables
	var page = {{page}};
	
	// set site variables
	var site = {{site}};
	
	// redirect if user is not logged in
	if(page.IsSecure == true && $scope.user == null){
		
		console.log('[triangulate.message] page requires login, user not logged in');
			
		$state.go('login');
		
	}
	else if(page.IsSecure == true && $scope.user != null){	// check if the user is allowed to view the site
		
		var isAllowed = false;
		
		// users with All can view the page
		if($rootScope.user.CanView == 'All'){
			console.log('[triangulate.message] valid permissions');
			isAllowed = true;
		}
		else if($rootScope.user.CanView.indexOf(page.PageTypeId) != -1){
			console.log('[triangulate.message] valid permissions');
			isAllowed = true;
		}
		
		if(isAllowed == false){
			console.log('[triangulate.message] invalid permissions');
			$state.go('login');
		}
		else{
			console.log('[triangulate.message] valid permissions');
		}
		
	}
	
	// set page to $scope and $rootScope
	$scope.page = page
	$rootScope.page = page;
	
	// set site to scope and $rootscope
	$scope.site = site;
	$rootScope.site = $scope.site;
	
	// set fullLogoUrl
	$scope.fullLogoUrl = $scope.site.ImagesURL + $scope.site.LogoUrl;
	
	// set cart to scope
	$scope.cart = $rootScope.cart;
		
	// toggle settings
	$scope.toggleSettings = function(){
		$('body').removeClass('show-cart');
		$('body').removeClass('show-search');
	
		$('body').toggleClass('show-settings');
	}
	
	// toggle cart
	$scope.toggleCart = function(){
		$('body').removeClass('show-settings');
		$('body').removeClass('show-search');
	
		$('body').toggleClass('show-cart');
	}
	
	// toggle search
	$scope.toggleSearch = function(){
		$('body').removeClass('show-settings');
		$('body').removeClass('show-cart');
	
		$('body').toggleClass('show-search');
	}

})