import RPi.GPIO as GPIO
import argparse
from time import sleep

parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('-c', type=int, dest='count', help='count of buzz')
parser.add_argument('-d', type=float, dest='delay', help='delay of buzz')
args = parser.parse_args()

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
count=args.count
delay=args.delay
buzzer=23
GPIO.setup(buzzer,GPIO.OUT)
while count >= 0:
        GPIO.output(buzzer,GPIO.HIGH)
        sleep(delay)
        GPIO.output(buzzer,GPIO.LOW)
        sleep(delay)
        count -= 1
GPIO.output(buzzer,GPIO.LOW)
