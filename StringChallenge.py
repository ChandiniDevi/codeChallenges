

def StringChallenge(str_input):
    max_count= 0
    chars_seen={}

    for i,c in enumerate(str_input):
        if c in chars_seen:
            count=len(set(str_input[chars_seen[c]+1:1]))
      
            if count > max_count:
                 max_count = count
        else:
            chars_seen[c]=i

    return max_count
print(StringChallenge("ahyjakh"))