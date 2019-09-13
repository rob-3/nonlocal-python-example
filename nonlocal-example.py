def counter_maker():
    count = 0
    def counter():
        nonlocal count
        count += 1
        print(count)
    return counter

my_counter = counter_maker()
your_counter = counter_maker()

my_counter()
my_counter()
my_counter()
my_counter()

your_counter()
your_counter()
your_counter()
your_counter()
