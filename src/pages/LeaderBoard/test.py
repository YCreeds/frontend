from os import listdir
from os.path import isfile, join
import re

regex = r"src=\"(.+?)\""

def get_files(p):
	return [f for f in listdir(p) if isfile(join(p, f))]

with open('../Profile/profile.tsx', 'r') as r:
	content = r.readlines()
	files = get_files('../../../public/assets/profile_assets/')

	for i, e in enumerate(content):
		test = e

		matches = [*re.finditer(regex, test, re.MULTILINE)]

		if len(matches):
			m = matches[0].groups()[0]
			filename = m.split('/').pop()

			idx = -1

			for j, e2 in enumerate([f3.lower() for f3 in files]):
				if filename.lower() == e2:
					idx = j

			if idx != -1:
				content[i] = e.replace(filename, files[idx])
				print(filename, files[idx])
			
