'''
Followed tutorial from this link: https://github.com/sushil-kamble/django-react-auth
'''
from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ItemSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from .models import Item
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
# from django.contrib.auth.mixins import LoginRequiredMixin


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

# Create your views here.
class ItemView(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    model = Item
    serializer_class = ItemSerializer
    def get_queryset(self):
        return Item.objects.filter(user=self.request.user.id)
    

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh',
        '/api/items/',
    ]
    return Response(routes)
