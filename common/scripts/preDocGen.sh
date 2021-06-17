flag=$1
file=tsconfig.json

echo "jsx property selected: $flag"

perl -i -p -e 's/\"jsx\": \"preserve\"/\"jsx\": \"react\"/g;' $file

echo "jsx config property was changed. Current value: $flag"