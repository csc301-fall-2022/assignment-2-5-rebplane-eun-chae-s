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
from rest_framework.decorators import permission_classes
# from django.contrib.auth.mixins import LoginRequiredMixin


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

# Create your views here.
# class ItemView(viewsets.ModelViewSet):
#     permission_classes = [IsAuthenticated]
#     model = Item
#     serializer_class = ItemSerializer

#     def get_queryset(self):
#         print(self.request.user)
#         return Item.objects.filter(user=self.request.user.id)
    
@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def getItems(request):
    if request.method == 'GET':
        items = Item.objects.filter(user=request.user)
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        data = request.data
        item = Item.objects.create(name=data['name'], quantity=data['quantity'], price=data['price'], user=request.user)
        serializer = ItemSerializer(item, many=False)
        return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def getItem(request, pk):
    print(request.user)
    if request.method == 'DELETE':
        item = Item.objects.filter(id=pk)
        item.delete()
        return Response("Item was successfully deleted")
    

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh',
        '/api/items/',
    ]
    return Response(routes)
