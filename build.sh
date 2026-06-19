#!/bin/bash
rm -rf dist

ng build --deploy-url https://adashrod.github.io/AppAndOsPreferencesCss/ --base-href /AppAndOsPreferencesCss/
