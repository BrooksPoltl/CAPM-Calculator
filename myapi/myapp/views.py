from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from .models import Responses
from .serializers import ResponsesSerializer
from .Calc.index import capm_calculator 

# Create your views here.
def home(request):
    ticker = request.GET["TICKER"]
    months = request.GET["MONTHS"]
    months = int(months)

    response = capm_calculator(months, ticker) 
    template = "home.html"
    context = {
        'message': response,
    }
    return JsonResponse(response)

