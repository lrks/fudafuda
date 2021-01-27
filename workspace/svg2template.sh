#!/bin/bash
convert() {
    name="${1}.template"
    cat "$1" | perl -pe 's/((-inkscape-)?font-.+?|line-height):.+?[;"]//g' > "$name"
    ../node_modules/svgo/bin/svgo -i "$name" --pretty --indent=2 --disable=mergePaths --enable=removeXMLNS,cleanupListOfValues,removeRasterImages,sortAttrs
    if [ "${1}" = "akizuki-mini.svg" ]; then
        cat "$name" | perl -pe 's/class="seg(\d+)"/class="seg$1" \@click="toggle($1)" v-bind:opacity="segments[$1] ? 1 : 0.1"/g; s/class="seg\d+" ?//g' > "${name}.tmp"
    elif [ "${1}" = "akizuki-big.svg" ]; then
        cat "$name" | perl -pe 's/class="seg(\d+)\s+com(\d+)"/class="removed" \@click="toggle($2, $1)" v-bind:opacity="vram[$2][$1] ? 1 : 0.1"/g; s/class="removed" ?//g' > "${name}.tmp"
    fi
    mv "${name}.tmp" "$name"
}

dirname $0
#convert "akizuki-mini.svg"
convert "akizuki-big.svg"
