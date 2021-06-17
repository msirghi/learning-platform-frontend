flag=$1
file=tsconfig.json

echo "flag for isolated modules: $flag"

perl -pi -e "s/\"isolatedModules\": false/\"isolatedModules\": $1/g" $file

echo "isolated modules flag changed. Current value: $flag"