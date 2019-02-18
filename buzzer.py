import RPi.GPIO as GPIO
import sys, getopt
from time import sleep

def main(argv):
   count = 0
   delay = 0
   try:
      opts, args = getopt.getopt(argv,"hi:o:",["count=","delay="])
   except getopt.GetoptError:
      print 'buzzer.py -c <count> -d <delay>'
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print 'buzzer.py -c <count> -d <delay>'
         sys.exit()
      elif opt in ("-c", "--cnt"):
         count = arg
      elif opt in ("-d", "--dly"):
         delay = arg
   print 'Count of buzz is "', count
   print 'Delay of buzz is "', delay

if __name__ == "__main__":
   main(sys.argv[1:])

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
buzzer=23
GPIO.setup(buzzer,GPIO.OUT)
while count >= 0:
        GPIO.output(buzzer,GPIO.HIGH)
        sleep(delay)
        GPIO.output(buzzer,GPIO.LOW)
        sleep(delay)
        count -= 1
GPIO.output(buzzer,GPIO.LOW)
sleep(1)