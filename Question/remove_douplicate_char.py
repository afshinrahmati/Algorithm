
def remove_duplicate_chars(s):
    result = ""
    for char in s:
        if char not in result:
            result += char
    return result

# Example
s = "aabbccddeeff"
print(remove_duplicate_chars(s))  # Output: "abcdef"