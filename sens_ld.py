def main():
    u = 30

    try:
        a = float(input("Enter area of the building (in sq. m.) : "))
        n = float(input("Enter number of occupants in the building : "))
    except ValueError:
        print("Wrong input")
        exit(0)
    s = input("Enter type of building residential, commercial, etc : ").lower()
    try:
        ot = float(input("Enter outdoor temperature in Celsius : "))
        it = float(input("Enter desired indoor temperature in Celsius : "))
    except ValueError:
        print("Wrong input")
        exit(0)
    if s[0] == 'r':
        cl = 100 * n
    elif s[0] == 'c':
        cl = 150 * n
    else:
        print("Invalid building type")
        exit(0)

    q_conduc = u * a * (ot - it)
    scl = q_conduc + cl

    print(f"The final cooling load is : {scl:.2f} watts")


if __name__ == "__main__":
    main()
