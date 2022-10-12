from rest_framework import serializers
from .models import Item
# from django.contrib.auth.models import User
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# User authentication

# Item Data
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'quantity', 'price')