from rest_framework import serializers

from roofs.models import Roof

class RoofSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roof
        fields = "__all__"
        
