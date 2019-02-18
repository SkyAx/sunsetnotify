import RPi.GPIO as GPIO
from time import sleep
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
buzzer=23
count=8
GPIO.setup(buzzer,GPIO.OUT)
while count >= 0:
        GPIO.output(buzzer,GPIO.HIGH)
        sleep(0.5)
        GPIO.output(buzzer,GPIO.LOW)
        sleep(0.5)
        count -= 1
GPIO.output(buzzer,GPIO.LOW)
sleep(0.5)