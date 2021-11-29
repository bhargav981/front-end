#!/bin/sh
echo Path name is ” $1
path=$1
echo “File name is ” $2
name=$2

echo "creating folder with" $2
first=`echo $name|cut -c1|tr [A-Z] [a-z]`
second=`echo $name|cut -c2-`
third=$first$second
mkdir $path$third && cd $path$third

echo "creating index.js"
curl https://knolskape-website.s3.amazonaws.com/misc/bharath_janyavula/2019/02/18/23/index.js > index.js
sed -i 's/{component}/'"$name/g" index.js

echo "creating skin.js"
curl https://knolskape-website.s3.amazonaws.com/misc/varun_kumar/2019/06/11/81/skin.js > skin.js

echo "creating component jsx file"
first=`echo $name|cut -c1|tr [a-z] [A-Z]`
second=`echo $name|cut -c2-`
third=$first$second
curl https://knolskape-website.s3.amazonaws.com/misc/varun_kumar/2019/06/11/72/component.jsx > $third.jsx
sed -i 's/{component}/'"$name/g" $third.jsx

echo "creating component .sass file"
first=`echo $name|cut -c1|tr [A-Z] [a-z]`
second=`echo $name|cut -c2-`
third=$first$second
sassFileName=$third
touch $sassFileName.module.sass