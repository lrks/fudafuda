#!/bin/bash
convert() {
    name="${1}.template"
    cat "$1" | perl -pe 's/((-inkscape-)?font-.+?|line-height):.+?[;"]//g' > "$name"
    ../node_modules/svgo/bin/svgo -i "$name" --pretty --indent=2 --disable=mergePaths --enable=removeXMLNS,cleanupListOfValues,removeRasterImages,sortAttrs
    cat "$name" | perl -pe 's/class="seg(\d+)"/class="seg$1" \@click="toggle($1)" v-bind:opacity="segments[$1] ? 1 : 0.1"/g; s/class="seg\d+" ?//g' > "${name}.tmp"
    mv "${name}.tmp" "$name"
}

dirname $0
convert "akizuki-mini.svg"
