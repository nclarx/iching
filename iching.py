import csv
from json import dumps


def open_csv_file(file_path):
    """
        :param file_path: the path to a csv file
        :type file_path: string

        :return: a TextIOWrapper, see: https://docs.python.org/3/library/io.html#io.TextIOWrapper 
        :rtype: TextIOWrapper
    """
    with open(file_path) as file:
        return file.readlines()    

def convert_csv_to_json(file, csv_headers):
    """
       Takes a csv file and headers and returns a json file

       :param file: a file object which is a CSV
       :param csv_headers: a tuple of headers
       :type file: TextIOWrapper     
    """
    
    file_as_dict = csv.DictReader(file, fieldnames = csv_headers)
    return dict_to_json(file_as_dict)

def dict_to_json(dict):
    return dumps( [row for row in dict] )

def get_headers_as_tuple(file):
    return list_to_tuple(file[0].split(','))

def list_to_tuple(list):
    return tuple(list)


def main(output_file):
    file = open_csv_file('iching.csv')
    headers = get_headers_as_tuple(file)
    print(headers)
    json = convert_csv_to_json(file, headers)
    print(json)
    with open(output_file, 'w') as output:
        output.write(json)
main('iching.json')
