import cv2
import argparse
# import mysql.connector

# HOST='localhost'
# USER='lauretta'
# PASSWORD='dahlsens'
# DB='dahlsens'

# mydb = mysql.connector.connect(
#     host=HOST,
#     user=USER,
#     passwd=PASSWORD,
#     database=DB
# )

# mycursor = mydb.cursor()
# sql = "SELECT * FROM cameras WHERE url = '" + args.VIDEO_PATH + "'"

# mycursor.execute(sql)
# myresult = mycursor.fetchone()

parser = argparse.ArgumentParser()
parser.add_argument("VIDEO_PATH", type=str)
args = parser.parse_args()
cap = cv2.VideoCapture(args.VIDEO_PATH)

while cap.isOpened():
    ret, img = cap.read()
    cv2.imshow('Webcam', img)

    if cv2.waitKey(1) == 27:
        break

print('END OF PROGRAM')
cap.release()
cv2.destroyAllWindows()
# mydb.close()