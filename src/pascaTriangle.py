    def generate(numRows: int)
        if ( numRows!=0):
            rows=[[1]]
            for i in range(1,numRows+1):
                prevRow=rows[i-1]
                currRow=[]
                for j in range(i+1):
                    
                    currRow[j] = (prevRow[j] if j < len(prevRow) else 0) + (prevRow[j-1] if j-1 >= 0 else 0)
                
                rows.append(currRow)
            print(rows)
                





generate(5)


        