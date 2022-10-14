"""calculator_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# from rest_framework import routers
# from calculator import views
# from calculator_backend import calculator

urlpatterns = [
    path('admin/', admin.site.urls),
]

# forward requests with the pattern "/" to the module "calculator.urls"
# urlpatterns += [
#     path('calculator/', include('calculator.urls')),
# ]

# redirect the root URL of the site
# from django.views.generic import RedirectView

# urlpatterns += [
#     path('', RedirectView.as_view(url='/calculator/', permanent=True))
# ]

# let the development web server serve static files
from django.conf import settings
from django.conf.urls.static import static
# from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns += static(settings.STATIC_URL,
document_root=settings.STATIC_ROOT)

# router = routers.DefaultRouter()
# router.register(r'items', views.ItemView)

urlpatterns += [
    path('api/', include("calculator.urls"))
]


# add Django site authentication urls
# urlpatterns += [
#     path('accounts/',
#     include('django.contrib.auth.urls')),
# ]

# default view for decoding received JWTs
# from rest_framework_jwt.views import obtain_jwt_token
# urlpatterns += [
#     path('token-auth/', obtain_jwt_token)
# ]