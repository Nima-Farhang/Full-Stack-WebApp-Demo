from ast import Not

from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.contrib.auth.models import User
from .serializers import UserSerializer, UserSerializerWithToken
from .models import Address

from rest_framework import status



@api_view(['POST'])
def registerUser(request):

    data = request.data
    try:
        user = User.objects.create(
           email=data['email']
        )

        # Updading the profile
        address = Address.objects.get(user=user)
        address.id = data.address['phone']
        address.physical_address = data.address['phone']
        address.coordinates = data.address['phone']
        address.apiResults = data.address['phone']
        address.save()

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

