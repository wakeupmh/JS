function largestNeclkace(array) {
    let max = 0, beans = [], ibean = 0, head, tail, count = 0;
    if (array.length > 0)
    {
        for(i = 0; i < array.length; i++)
        {
            count = 1;
            head = i;
            tail = array[i];
            if (head != tail)
            {
                if (!beans.includes(head) || head == 0)
                {
                    beans[ibean++] = head;
                    beans[ibean++] = tail;
                    while (head != tail)
                    {
                        tail = array[tail];
                        beans[ibean++] = tail;
                        count++;
                    }
                }
            }
            if (count > max)
            {
                max = count;
            }
        }
    }
    return max;
}