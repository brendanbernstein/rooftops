from django.shortcuts import render
from django.http import JsonResponse

from roofs.serializers import RoofSerializer
from roofs.models import Roof

# Create your views here.

def home(request):
     return render(request, 'roofs/home.html', {})
     
def index(request):
     return render(request, 'roofs/index.html', {})

def roof_list(request):
    if request.method == 'GET':
        roofs = Roof.objects.all()
        serializer = RoofSerializer(roofs, many=True)
        return JsonResponse(serializer.data, safe=False)
