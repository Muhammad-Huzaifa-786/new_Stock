// const datas = [
//     { "box_number": 6, "style_code": "B0RL5053", "color": "light gray", "size": 14, "quantity": 1 },
//     { "box_number": 6, "style_code": "B0RL5053", "color": "light gray", "size": 15, "quantity": 1 },
//     { "box_number": 8, "style_code": "B0RL5053", "color": "light gray", "size": 16, "quantity": 4 },
//     { "box_number": 13, "style_code": "B0RL5053", "color": "light gray", "size": 16, "quantity": 5 },
//     { "box_number": 55, "style_code": "B0RL5053", "color": "Light pink", "size": 13, "quantity": 26 },
//     { "box_number": 56, "style_code": "B0RL5053", "color": "Light pink", "size": 13, "quantity": 19 },
//     { "box_number": 55, "style_code": "B0RL5053", "color": "Light pink", "size": 14, "quantity": 29 },
//     { "box_number": 56, "style_code": "B0RL5053", "color": "Light pink", "size": 14, "quantity": 16 },
//     { "box_number": 110, "style_code": "B0RL5053", "color": "Light pink", "size": 14, "quantity": 35 },
//     { "box_number": 6, "style_code": "B0RL5053", "color": "Light pink", "size": 15, "quantity": 1 },
//     { "box_number": 49, "style_code": "B0RL5053", "color": "Light pink", "size": 15, "quantity": 39 },
//     { "box_number": 56, "style_code": "B0RL5053", "color": "Light pink", "size": 15, "quantity": 11 },
//     { "box_number": 54, "style_code": "B0RL5053", "color": "Light pink", "size": 16, "quantity": 43 },
//     { "box_number": 56, "style_code": "B0RL5053", "color": "Light pink", "size": 16, "quantity": 17 },
//     { "box_number": 57, "style_code": "B0RL5053", "color": "Light pink", "size": 16, "quantity": 54 },
//     { "box_number": 6, "style_code": "B0RL5053", "color": "Light pink", "size": 17, "quantity": 3 },
//     { "box_number": 48, "style_code": "B0RL5053", "color": "Light pink", "size": 17, "quantity": 1 },
//     { "box_number": 54, "style_code": "B0RL5053", "color": "Light pink", "size": 17, "quantity": 20 },
//     { "box_number": 55, "style_code": "B0RL5053", "color": "Light pink", "size": 17, "quantity": 8 },
//     { "box_number": 57, "style_code": "B0RL5053", "color": "Navy blue", "size": 13, "quantity": 3 },
//     { "box_number": 57, "style_code": "B0RL5053", "color": "Navy blue", "size": 13, "quantity": 26 },
//     { "box_number": 6, "style_code": "B0RL5053", "color": "Navy blue", "size": 14, "quantity": 1 },
//     { "box_number": 48, "style_code": "B0RL5053", "color": "Navy blue", "size": 14, "quantity": 36 },
//     { "box_number": 57, "style_code": "B0RL5053", "color": "Navy blue", "size": 14, "quantity": 6 },
//     { "box_number": 48, "style_code": "B0RL5053", "color": "Navy blue", "size": 15, "quantity": 26 },
//     { "box_number": 49, "style_code": "B0RL5053", "color": "Navy blue", "size": 15, "quantity": 24 },
//     { "box_number": 3, "style_code": "B0RL5053", "color": "Navy blue", "size": 16, "quantity": 2 },
//     { "box_number": 6, "style_code": "B0RL5053", "color": "Navy blue", "size": 16, "quantity": 1 },
//     { "box_number": 138, "style_code": "B0RL5053", "color": "Navy blue", "size": 16, "quantity": 45 },
//     { "box_number": 3, "style_code": "B0RL5053", "color": "Navy blue", "size": 17, "quantity": 6 },
//     { "box_number": 3, "style_code": "B0RL5053", "color": "Navy blue", "size": 17, "quantity": 2 },
//     { "box_number": 76, "style_code": "B1BA5023", "color": "Blue", "size": 12, "quantity": 33 },
//     { "box_number": 133, "style_code": "B1BA5023", "color": "Blue", "size": 12, "quantity": 3 },
//     { "box_number": 76, "style_code": "B1BA5023", "color": "Blue", "size": 13, "quantity": 14 },
//     { "box_number": 76, "style_code": "B1BA5023", "color": "Lotus root starch", "size": 12, "quantity": 16 },
//     { "box_number": 133, "style_code": "B1BA5023", "color": "Lotus root starch", "size": 14, "quantity": 69 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Gray", "size": 12, "quantity": 8 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Gray", "size": 12, "quantity": 1 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Gray", "size": 13, "quantity": 8 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Gray", "size": 13, "quantity": 2 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Gray", "size": 14, "quantity": 4 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Gray", "size": 14, "quantity": 1 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Gray", "size": 15, "quantity": 4 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Gray", "size": 15, "quantity": 3 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Gray", "size": 16, "quantity": 1 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Gray", "size": 16, "quantity": 4 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Pink", "size": 12, "quantity": 9 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Pink", "size": 14, "quantity": 7 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Pink", "size": 15, "quantity": 2 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Pink", "size": 15, "quantity": 5 },
//     { "box_number": 65, "style_code": "H0DA0108", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 66, "style_code": "H0DA0108", "color": "Pink", "size": 16, "quantity": 9 },
//     { "box_number": 20, "style_code": "H0DA0111", "color": "Black", "size": 14, "quantity": 2 },
//     { "box_number": 20, "style_code": "H0DA0111", "color": "White", "size": 18, "quantity": 1 },
//     { "box_number": 37, "style_code": "H0DA0166", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 20, "style_code": "H0DA0166", "color": "Black", "size": 16, "quantity": 1 },
//     { "box_number": 67, "style_code": "H1DA0006", "color": "light blu", "size": 8, "quantity": 1 },
//     { "box_number": 67, "style_code": "H1DA0006", "color": "Matcha gree", "size": 8, "quantity": 1 },
//     { "box_number": 67, "style_code": "H1DA0006", "color": "Matcha gree", "size": 9, "quantity": 1 },
//     { "box_number": 67, "style_code": "H1DA0006", "color": "Yello", "size": 8, "quantity": 1 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "Green", "size": 11, "quantity": 15 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "Green", "size": 12, "quantity": 27 },
//     { "box_number": 145, "style_code": "H1DA0023", "color": "Green", "size": 12, "quantity": 7 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "Green", "size": 13, "quantity": 2 },
//     { "box_number": 145, "style_code": "H1DA0023", "color": "Green", "size": 13, "quantity": 26 },
//     { "box_number": 3, "style_code": "H1DA0023", "color": "Green", "size": 14, "quantity": 2 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "Green", "size": 14, "quantity": 1 },
//     { "box_number": 145, "style_code": "H1DA0023", "color": "Green", "size": 14, "quantity": 12 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "light gray", "size": 11, "quantity": 16 },
//     { "box_number": 145, "style_code": "H1DA0023", "color": "light gray", "size": 11, "quantity": 1 },
//     { "box_number": 3, "style_code": "H1DA0023", "color": "light gray", "size": 12, "quantity": 6 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "light gray", "size": 12, "quantity": 9 },
//     { "box_number": 3, "style_code": "H1DA0023", "color": "light gray", "size": 13, "quantity": 11 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "light gray", "size": 13, "quantity": 1 },
//     { "box_number": 3, "style_code": "H1DA0023", "color": "light gray", "size": 14, "quantity": 7 },
//     { "box_number": 144, "style_code": "H1DA0023", "color": "light gray", "size": 14, "quantity": 1 },
//     { "box_number": 3, "style_code": "H1DA0023", "color": "Yellow", "size": 11, "quantity": 1 },
//     { "box_number": 31, "style_code": "H1DA0030", "color": "blue", "size": 10, "quantity": 1 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "blue", "size": 10, "quantity": 12 },
//     { "box_number": 126, "style_code": "H1DA0030", "color": "blue", "size": 10, "quantity": 14 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "Blue", "size": 11, "quantity": 16 },
//     { "box_number": 126, "style_code": "H1DA0030", "color": "Blue", "size": 11, "quantity": 14 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "Blue", "size": 12, "quantity": 3 },
//     { "box_number": 126, "style_code": "H1DA0030", "color": "Blue", "size": 12, "quantity": 16 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "Blue", "size": 13, "quantity": 1 },
//     { "box_number": 126, "style_code": "H1DA0030", "color": "Blue", "size": 13, "quantity": 16 },
//     { "box_number": 129, "style_code": "H1DA0030", "color": "Blue", "size": 13, "quantity": 1 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "forest green", "size": 10, "quantity": 7 },
//     { "box_number": 126, "style_code": "H1DA0030", "color": "forest green", "size": 10, "quantity": 12 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "forest green", "size": 11, "quantity": 13 },
//     { "box_number": 126, "style_code": "H1DA0030", "color": "forest green", "size": 11, "quantity": 5 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "forest green", "size": 12, "quantity": 17 },
//     { "box_number": 126, "style_code": "H1DA0030", "color": "forest green", "size": 12, "quantity": 1 },
//     { "box_number": 31, "style_code": "H1DA0030", "color": "forest green", "size": 13, "quantity": 1 },
//     { "box_number": 32, "style_code": "H1DA0030", "color": "forest green", "size": 13, "quantity": 11 },
//     { "box_number": 125, "style_code": "H1DA0030", "color": "forest green", "size": 13, "quantity": 3 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "Apricot", "size": 11, "quantity": 2 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "Apricot", "size": 12, "quantity": 3 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "Apricot", "size": 14, "quantity": 1 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "light gray", "size": 11, "quantity": 2 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "light gray", "size": 13, "quantity": 2 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "light gray", "size": 14, "quantity": 4 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "light green", "size": 11, "quantity": 3 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "light green", "size": 12, "quantity": 2 },
//     { "box_number": 67, "style_code": "H1DL0658", "color": "light green", "size": 14, "quantity": 1 },
//     { "box_number": 62, "style_code": "H1RA0069", "color": "Black", "size": 13, "quantity": 1 },
//     { "box_number": 66, "style_code": "H1RA0069", "color": "Black", "size": 13, "quantity": 1 },
//     { "box_number": 62, "style_code": "H1RA0069", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 66, "style_code": "H1RA0069", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 66, "style_code": "H1RA0069", "color": "Black", "size": 16, "quantity": 3 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "light green", "size": 11, "quantity": 9 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "light green", "size": 11, "quantity": 2 },
//     { "box_number": 113, "style_code": "H2DA0026", "color": "light green", "size": 11, "quantity": 4 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "light green", "size": 12, "quantity": 24 },
//     { "box_number": 113, "style_code": "H2DA0026", "color": "light green", "size": 12, "quantity": 15 },
//     { "box_number": 117, "style_code": "H2DA0026", "color": "light green", "size": 12, "quantity": 28 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "light green", "size": 13, "quantity": 23 },
//     { "box_number": 113, "style_code": "H2DA0026", "color": "light green", "size": 13, "quantity": 16 },
//     { "box_number": 117, "style_code": "H2DA0026", "color": "light green", "size": 13, "quantity": 24 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "light green", "size": 14, "quantity": 8 },
//     { "box_number": 113, "style_code": "H2DA0026", "color": "light green", "size": 14, "quantity": 21 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "Pink", "size": 11, "quantity": 7 },
//     { "box_number": 113, "style_code": "H2DA0026", "color": "Pink", "size": 11, "quantity": 15 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "Pink", "size": 12, "quantity": 13 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "Pink", "size": 12, "quantity": 7 },
//     { "box_number": 113, "style_code": "H2DA0026", "color": "Pink", "size": 13, "quantity": 4 },
//     { "box_number": 117, "style_code": "H2DA0026", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 81, "style_code": "H2DA0026", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 113, "style_code": "H2DA0026", "color": "Pink", "size": 14, "quantity": 9 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Dark green", "size": 10, "quantity": 9 },
//     { "box_number": 140, "style_code": "H2DA0031", "color": "Dark green", "size": 10, "quantity": 7 },
//     { "box_number": 140, "style_code": "H2DA0031", "color": "Dark green", "size": 10, "quantity": 9 },
//     { "box_number": 31, "style_code": "H2DA0031", "color": "Dark green", "size": 11, "quantity": 3 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Dark green", "size": 11, "quantity": 16 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Dark green", "size": 11, "quantity": 19 },
//     { "box_number": 131, "style_code": "H2DA0031", "color": "Dark green", "size": 11, "quantity": 8 },
//     { "box_number": 140, "style_code": "H2DA0031", "color": "Dark green", "size": 11, "quantity": 5 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Dark green", "size": 12, "quantity": 18 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Dark green", "size": 12, "quantity": 33 },
//     { "box_number": 31, "style_code": "H2DA0031", "color": "Dark green", "size": 13, "quantity": 1 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Dark green", "size": 13, "quantity": 5 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Dark green", "size": 13, "quantity": 13 },
//     { "box_number": 139, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 10, "quantity": 18 },
//     { "box_number": 139, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 11, "quantity": 28 },
//     { "box_number": 140, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 11, "quantity": 14 },
//     { "box_number": 31, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 12, "quantity": 2 },
//     { "box_number": 139, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 12, "quantity": 34 },
//     { "box_number": 140, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 12, "quantity": 10 },
//     { "box_number": 32, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 13, "quantity": 6 },
//     { "box_number": 131, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 13, "quantity": 1 },
//     { "box_number": 139, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 13, "quantity": 4 },
//     { "box_number": 8, "style_code": "H2RL0206", "color": "Meat powder", "size": 12, "quantity": 1 },
//     { "box_number": 60, "style_code": "H2RL0206", "color": "Meat powder", "size": 12, "quantity": 6 },
//     { "box_number": 61, "style_code": "H2RL0206", "color": "Meat powder", "size": 12, "quantity": 3 },
//     { "box_number": 60, "style_code": "H2RL0206", "color": "Meat powder", "size": 13, "quantity": 3 },
//     { "box_number": 61, "style_code": "H2RL0206", "color": "Meat powder", "size": 13, "quantity": 11 },
//     { "box_number": 60, "style_code": "H2RL0206", "color": "Meat powder", "size": 14, "quantity": 5 },
//     { "box_number": 61, "style_code": "H2RL0206", "color": "Meat powder", "size": 14, "quantity": 2 },
//     { "box_number": 8, "style_code": "H2RL0206", "color": "Meat powder", "size": 15, "quantity": 1 },
//     { "box_number": 60, "style_code": "H2RL0206", "color": "Meat powder", "size": 15, "quantity": 7 },
//     { "box_number": 61, "style_code": "H2RL0206", "color": "Meat powder", "size": 15, "quantity": 8 },
//     { "box_number": 60, "style_code": "H2RL0206", "color": "Meat powder", "size": 16, "quantity": 7 },
//     { "box_number": 61, "style_code": "H2RL0206", "color": "Meat powder", "size": 16, "quantity": 7 },
//     { "box_number": 105, "style_code": "HE106018", "color": "Gray", "size": 12, "quantity": 14 },
//     { "box_number": 106, "style_code": "HE106018", "color": "Gray", "size": 12, "quantity": 3 },
//     { "box_number": 105, "style_code": "HE106018", "color": "Gray", "size": 13, "quantity": 10 },
//     { "box_number": 106, "style_code": "HE106018", "color": "Gray", "size": 13, "quantity": 3 },
//     { "box_number": 105, "style_code": "HE106018", "color": "Gray", "size": 14, "quantity": 8 },
//     { "box_number": 106, "style_code": "HE106018", "color": "Gray", "size": 14, "quantity": 8 },
//     { "box_number": 105, "style_code": "HE106018", "color": "Gray", "size": 15, "quantity": 16 },
//     { "box_number": 106, "style_code": "HE106018", "color": "Gray", "size": 15, "quantity": 9 },
//     { "box_number": 159, "style_code": "HE106018", "color": "Gray", "size": 15, "quantity": 1 },
//     { "box_number": 105, "style_code": "HE106018", "color": "Gray", "size": 16, "quantity": 3 },
//     { "box_number": 105, "style_code": "HE106018", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 159, "style_code": "HE106018", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 160, "style_code": "HE106018", "color": "Pink", "size": 12, "quantity": 3 },
//     { "box_number": 106, "style_code": "HE106018", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 159, "style_code": "HE106018", "color": "Pink", "size": 13, "quantity": 2 },
//     { "box_number": 160, "style_code": "HE106018", "color": "Pink", "size": 13, "quantity": 5 },
//     { "box_number": 106, "style_code": "HE106018", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 159, "style_code": "HE106018", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 160, "style_code": "HE106018", "color": "Pink", "size": 14, "quantity": 5 },
//     { "box_number": 106, "style_code": "HE106018", "color": "Pink", "size": 15, "quantity": 4 },
//     { "box_number": 159, "style_code": "HE106018", "color": "Pink", "size": 15, "quantity": 3 },
//     { "box_number": 160, "style_code": "HE106018", "color": "Pink", "size": 15, "quantity": 3 },
//     { "box_number": 160, "style_code": "HE106018", "color": "Pink", "size": 16, "quantity": 2 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 12, "quantity": 1 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 13, "quantity": 13 },
//     { "box_number": 68, "style_code": "HE106026", "color": "Blue", "size": 14, "quantity": 13 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 14, "quantity": 16 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 14, "quantity": 3 },
//     { "box_number": 68, "style_code": "HE106026", "color": "Blue", "size": 15, "quantity": 26 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 15, "quantity": 6 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 15, "quantity": 3 },
//     { "box_number": 68, "style_code": "HE106026", "color": "Blue", "size": 16, "quantity": 12 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 16, "quantity": 1 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Blue", "size": 16, "quantity": 1 },
//     { "box_number": 40, "style_code": "HE106026", "color": "Pink", "size": 12, "quantity": 31 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 12, "quantity": 10 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 13, "quantity": 37 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 13, "quantity": 11 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 14, "quantity": 24 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 14, "quantity": 17 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 15, "quantity": 2 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 15, "quantity": 15 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 16, "quantity": 3 },
//     { "box_number": 69, "style_code": "HE106026", "color": "Pink", "size": 16, "quantity": 19 },
//     { "box_number": 71, "style_code": "HE106030", "color": "Bean paste color", "size": 11, "quantity": 7 },
//     { "box_number": 72, "style_code": "HE106030", "color": "Bean paste color", "size": 11, "quantity": 1 },
//     { "box_number": 73, "style_code": "HE106030", "color": "Bean paste color", "size": 11, "quantity": 15 },
//     { "box_number": 101, "style_code": "HE106030", "color": "Bean paste color", "size": 11, "quantity": 16 },
//     { "box_number": 71, "style_code": "HE106030", "color": "Bean paste color", "size": 12, "quantity": 7 },
//     { "box_number": 72, "style_code": "HE106030", "color": "Bean paste color", "size": 12, "quantity": 6 },
//     { "box_number": 73, "style_code": "HE106030", "color": "Bean paste color", "size": 12, "quantity": 12 },
//     { "box_number": 74, "style_code": "HE106030", "color": "Bean paste color", "size": 12, "quantity": 2 },
//     { "box_number": 101, "style_code": "HE106030", "color": "Bean paste color", "size": 12, "quantity": 17 },
//     { "box_number": 71, "style_code": "HE106030", "color": "Bean paste color", "size": 13, "quantity": 5 },
//     { "box_number": 72, "style_code": "HE106030", "color": "Bean paste color", "size": 13, "quantity": 12 },
//     { "box_number": 73, "style_code": "HE106030", "color": "Bean paste color", "size": 13, "quantity": 7 },
//     { "box_number": 74, "style_code": "HE106030", "color": "Bean paste color", "size": 13, "quantity": 6 },
//     { "box_number": 101, "style_code": "HE106030", "color": "Bean paste color", "size": 13, "quantity": 18 },
//     { "box_number": 71, "style_code": "HE106030", "color": "Bean paste color", "size": 14, "quantity": 6 },
//     { "box_number": 72, "style_code": "HE106030", "color": "Bean paste color", "size": 14, "quantity": 15 },
//     { "box_number": 73, "style_code": "HE106030", "color": "Bean paste color", "size": 14, "quantity": 6 },
//     { "box_number": 74, "style_code": "HE106030", "color": "Bean paste color", "size": 14, "quantity": 5 },
//     { "box_number": 101, "style_code": "HE106030", "color": "Bean paste color", "size": 14, "quantity": 11 },
//     { "box_number": 71, "style_code": "HE106030", "color": "dark blue", "size": 11, "quantity": 5 },
//     { "box_number": 72, "style_code": "HE106030", "color": "dark blue", "size": 11, "quantity": 8 },
//     { "box_number": 73, "style_code": "HE106030", "color": "dark blue", "size": 11, "quantity": 12 },
//     { "box_number": 74, "style_code": "HE106030", "color": "dark blue", "size": 11, "quantity": 3 },
//     { "box_number": 101, "style_code": "HE106030", "color": "dark blue", "size": 11, "quantity": 5 },
//     { "box_number": 102, "style_code": "HE106030", "color": "dark blue", "size": 11, "quantity": 2 },
//     { "box_number": 71, "style_code": "HE106030", "color": "dark blue", "size": 12, "quantity": 7 },
//     { "box_number": 72, "style_code": "HE106030", "color": "dark blue", "size": 12, "quantity": 9 },
//     { "box_number": 73, "style_code": "HE106030", "color": "dark blue", "size": 12, "quantity": 6 },
//     { "box_number": 74, "style_code": "HE106030", "color": "dark blue", "size": 12, "quantity": 7 },
//     { "box_number": 101, "style_code": "HE106030", "color": "dark blue", "size": 12, "quantity": 16 },
//     { "box_number": 102, "style_code": "HE106030", "color": "dark blue", "size": 12, "quantity": 3 },
//     { "box_number": 71, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 7 },
//     { "box_number": 72, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 9 },
//     { "box_number": 73, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 9 },
//     { "box_number": 74, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 7 },
//     { "box_number": 101, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 1 },
//     { "box_number": 102, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 16 },
//     { "box_number": 26, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 1 },
//     { "box_number": 71, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 8 },
//     { "box_number": 72, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 12 },
//     { "box_number": 73, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 5 },
//     { "box_number": 74, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 6 },
//     { "box_number": 102, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 11 },
//     { "box_number": 147, "style_code": "L0BQ6057", "color": "Black/sapphire blue", "size": 16, "quantity": 49 },
//     { "box_number": 148, "style_code": "L0BQ6057", "color": "Black/sapphire blue", "size": 16, "quantity": 7 },
//     { "box_number": 75, "style_code": "L2RL6215", "color": "Pink", "size": 12, "quantity": 4 },
//     { "box_number": 75, "style_code": "L2RL6215", "color": "Pink", "size": 13, "quantity": 5 },
//     { "box_number": 75, "style_code": "L2RL6215", "color": "Pink", "size": 14, "quantity": 5 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 12, "quantity": 2 },
//     { "box_number": 52, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 12, "quantity": 16 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 13, "quantity": 2 },
//     { "box_number": 52, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 13, "quantity": 11 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 14, "quantity": 18 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 15, "quantity": 14 },
//     { "box_number": 52, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 15, "quantity": 21 },
//     { "box_number": 6, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 16, "quantity": 1 },
//     { "box_number": 50, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 16, "quantity": 1 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 16, "quantity": 2 },
//     { "box_number": 8, "style_code": "X0DD2500", "color": "Navy blue", "size": 14, "quantity": 3 },
//     { "box_number": 89, "style_code": "X0DD2500", "color": "Navy blue", "size": 14, "quantity": 1 },
//     { "box_number": 88, "style_code": "X0DD2500", "color": "Navy blue", "size": 16, "quantity": 1 },
//     { "box_number": 4, "style_code": "X0DD2500", "color": "Navy blue/red", "size": 12, "quantity": 7 },
//     { "box_number": 50, "style_code": "X0DD2500", "color": "Navy blue/red", "size": 13, "quantity": 14 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Navy blue/red", "size": 13, "quantity": 8 },
//     { "box_number": 8, "style_code": "X0DD2500", "color": "Navy blue/red", "size": 14, "quantity": 2 },
//     { "box_number": 11, "style_code": "X0DD2500", "color": "Navy blue/red", "size": 14, "quantity": 4 },
//     { "box_number": 12, "style_code": "X0DD2500", "color": "Navy blue/red", "size": 14, "quantity": 2 },
//     { "box_number": 50, "style_code": "X0DD2500", "color": "Pink", "size": 12, "quantity": 21 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Pink", "size": 12, "quantity": 4 },
//     { "box_number": 50, "style_code": "X0DD2500", "color": "Pink", "size": 14, "quantity": 15 },
//     { "box_number": 51, "style_code": "X0DD2500", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 89, "style_code": "X0DD2500", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 88, "style_code": "X0DD2500", "color": "Pink", "size": 16, "quantity": 5 },
//     { "box_number": 89, "style_code": "X0DD2500", "color": "Pink", "size": 16, "quantity": 15 },
//     { "box_number": 24, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 14 },
//     { "box_number": 25, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 12 },
//     { "box_number": 26, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 5 },
//     { "box_number": 69, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 1 },
//     { "box_number": 70, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 2 },
//     { "box_number": 70, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 1 },
//     { "box_number": 70, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 20 },
//     { "box_number": 78, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 30 },
//     { "box_number": 107, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 7 },
//     { "box_number": 107, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 1 },
//     { "box_number": 134, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 4 },
//     { "box_number": 22, "style_code": "X0DL2011", "color": "Sauce red ", "size": "", "quantity": 2 },
//     { "box_number": 24, "style_code": "X0DL2011", "color": "Sauce red ", "size": "", "quantity": 5 },
//     { "box_number": 69, "style_code": "X0DL2011", "color": "Sauce red ", "size": "", "quantity": 1 },
//     { "box_number": 70, "style_code": "X0DL2011", "color": "Sauce red ", "size": "", "quantity": 2 },
//     { "box_number": 85, "style_code": "X0DL2011", "color": "Sauce red ", "size": "", "quantity": 5 },
//     { "box_number": 156, "style_code": "X0DL2011", "color": "Sauce red ", "size": "", "quantity": 3 },
//     { "box_number": 21, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 8 },
//     { "box_number": 22, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 16 },
//     { "box_number": 70, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 6 },
//     { "box_number": 70, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 10 },
//     { "box_number": 107, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 5 },
//     { "box_number": 134, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 2 },
//     { "box_number": 26, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 9 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 2 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 2 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 3 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 1 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 1 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 1 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Butter green", "size": 11, "quantity": 5 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 1 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 3 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 6 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 2 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 6 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 5 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Butter green", "size": 13, "quantity": 10 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "Butter green", "size": 13, "quantity": 8 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Butter green", "size": 13, "quantity": 1 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Butter green", "size": 13, "quantity": 1 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Butter green", "size": 13, "quantity": 6 },
//     { "box_number": 25, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 1 },
//     { "box_number": 27, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 5 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 3 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 5 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 5 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 2 },
//     { "box_number": 27, "style_code": "X0DL2015", "color": "Butter green", "size": 15, "quantity": 4 },
//     { "box_number": 29, "style_code": "X0DL2015", "color": "Butter green", "size": 15, "quantity": 1 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Butter green", "size": 15, "quantity": 1 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Butter green", "size": 15, "quantity": 6 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Butter green", "size": 15, "quantity": 6 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Butter green", "size": 15, "quantity": 10 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Gray", "size": 11, "quantity": 1 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Gray", "size": 11, "quantity": 7 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Gray", "size": 11, "quantity": 1 },
//     { "box_number": 29, "style_code": "X0DL2015", "color": "Gray", "size": 12, "quantity": 5 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Gray", "size": 12, "quantity": 1 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Gray", "size": 12, "quantity": 1 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Gray", "size": 12, "quantity": 2 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Gray", "size": 13, "quantity": 2 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Gray", "size": 13, "quantity": 2 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Gray", "size": 13, "quantity": 7 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Gray", "size": 13, "quantity": 2 },
//     { "box_number": 26, "style_code": "X0DL2015", "color": "Gray", "size": 14, "quantity": 2 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Gray", "size": 14, "quantity": 1 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Gray", "size": 14, "quantity": 6 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Gray", "size": 14, "quantity": 8 },
//     { "box_number": 79, "style_code": "X0DL2015", "color": "Gray", "size": 15, "quantity": 1 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Gray", "size": 15, "quantity": 7 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Gray", "size": 15, "quantity": 2 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Lotus color", "size": 11, "quantity": 1 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Lotus color", "size": 12, "quantity": 3 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Lotus color", "size": 13, "quantity": 2 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Lotus color", "size": 14, "quantity": 3 },
//     { "box_number": 155, "style_code": "X0DL2015", "color": "Lotus color", "size": 15, "quantity": 2 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Moran", "size": 11, "quantity": 6 },
//     { "box_number": 97, "style_code": "X0DL2015", "color": "Moran", "size": 11, "quantity": 5 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "Moran", "size": 11, "quantity": 15 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Moran", "size": 11, "quantity": 3 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Moran", "size": 11, "quantity": 1 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Moran", "size": 12, "quantity": 9 },
//     { "box_number": 97, "style_code": "X0DL2015", "color": "Moran", "size": 12, "quantity": 16 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Moran", "size": 12, "quantity": 4 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Moran", "size": 12, "quantity": 5 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Moran", "size": 13, "quantity": 5 },
//     { "box_number": 97, "style_code": "X0DL2015", "color": "Moran", "size": 13, "quantity": 10 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Moran", "size": 13, "quantity": 6 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Moran", "size": 13, "quantity": 8 },
//     { "box_number": 146, "style_code": "X0DL2015", "color": "Moran", "size": 13, "quantity": 10 },
//     { "box_number": 26, "style_code": "X0DL2015", "color": "Moran", "size": 14, "quantity": 5 },
//     { "box_number": 27, "style_code": "X0DL2015", "color": "Moran", "size": 14, "quantity": 2 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Moran", "size": 14, "quantity": 4 },
//     { "box_number": 97, "style_code": "X0DL2015", "color": "Moran", "size": 14, "quantity": 10 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Moran", "size": 14, "quantity": 5 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Moran", "size": 14, "quantity": 8 },
//     { "box_number": 146, "style_code": "X0DL2015", "color": "Moran", "size": 14, "quantity": 1 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "Moran", "size": 15, "quantity": 5 },
//     { "box_number": 97, "style_code": "X0DL2015", "color": "Moran", "size": 15, "quantity": 10 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "Moran", "size": 15, "quantity": 1 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "Moran", "size": 15, "quantity": 1 },
//     { "box_number": 100, "style_code": "X0DL2015", "color": "Moran", "size": 15, "quantity": 3 },
//     { "box_number": 128, "style_code": "X0DL2015", "color": "Moran", "size": 15, "quantity": 5 },
//     { "box_number": 146, "style_code": "X0DL2015", "color": "Moran", "size": 15, "quantity": 4 },
//     { "box_number": 21, "style_code": "X0DL2015", "color": "stamen powder", "size": 11, "quantity": 3 },
//     { "box_number": 79, "style_code": "X0DL2015", "color": "stamen powder", "size": 11, "quantity": 2 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "stamen powder", "size": 11, "quantity": 2 },
//     { "box_number": 79, "style_code": "X0DL2015", "color": "stamen powder", "size": 12, "quantity": 1 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "stamen powder", "size": 12, "quantity": 6 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "stamen powder", "size": 12, "quantity": 2 },
//     { "box_number": 79, "style_code": "X0DL2015", "color": "stamen powder", "size": 13, "quantity": 3 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "stamen powder", "size": 13, "quantity": 2 },
//     { "box_number": 99, "style_code": "X0DL2015", "color": "stamen powder", "size": 13, "quantity": 3 },
//     { "box_number": 36, "style_code": "X0DL2015", "color": "stamen powder", "size": 14, "quantity": 1 },
//     { "box_number": 77, "style_code": "X0DL2015", "color": "stamen powder", "size": 14, "quantity": 3 },
//     { "box_number": 79, "style_code": "X0DL2015", "color": "stamen powder", "size": 14, "quantity": 1 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "stamen powder", "size": 14, "quantity": 7 },
//     { "box_number": 22, "style_code": "X0DL2015", "color": "stamen powder", "size": 15, "quantity": 2 },
//     { "box_number": 36, "style_code": "X0DL2015", "color": "stamen powder", "size": 15, "quantity": 1 },
//     { "box_number": 79, "style_code": "X0DL2015", "color": "stamen powder", "size": 15, "quantity": 6 },
//     { "box_number": 98, "style_code": "X0DL2015", "color": "stamen powder", "size": 15, "quantity": 4 },
//     { "box_number": 39, "style_code": "X0DL2031", "color": "Apricot", "size": 23, "quantity": 4 },
//     { "box_number": 24, "style_code": "X0DL2031", "color": "Navy blue", "size": 15, "quantity": 5 },
//     { "box_number": 39, "style_code": "X0DL2031", "color": "Navy blue", "size": 19, "quantity": 1 },
//     { "box_number": 29, "style_code": "X0DL2031", "color": "Navy blue", "size": 22, "quantity": 4 },
//     { "box_number": 36, "style_code": "X0DL2031", "color": "Navy blue", "size": 22, "quantity": 1 },
//     { "box_number": 39, "style_code": "X0DL2031", "color": "Navy blue", "size": 22, "quantity": 8 },
//     { "box_number": 39, "style_code": "X0DL2031", "color": "Navy blue", "size": 22, "quantity": 5 },
//     { "box_number": 36, "style_code": "X0DL2031", "color": "Navy blue", "size": 23, "quantity": 10 },
//     { "box_number": 36, "style_code": "X0DL2032", "color": "Black", "size": 22, "quantity": 1 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "Black", "size": 19, "quantity": 6 },
//     { "box_number": 25, "style_code": "X0DL2037", "color": "Black", "size": 23, "quantity": 9 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "dark gray", "size": 17, "quantity": 9 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "dark gray", "size": 21, "quantity": 1 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "dark gray", "size": 22, "quantity": 1 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "dark gray", "size": 23, "quantity": 6 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "light gray", "size": 23, "quantity": 3 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "Pink", "size": 18, "quantity": 11 },
//     { "box_number": 58, "style_code": "X0DL2037", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 40, "style_code": "X0DL2037", "color": "Pink", "size": 23, "quantity": 7 },
//     { "box_number": 26, "style_code": "X0DL2082", "color": "Big Red", "size": 15, "quantity": 2 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "Big Red", "size": 15, "quantity": 1 },
//     { "box_number": 143, "style_code": "X0DL2082", "color": "Big Red", "size": 15, "quantity": 3 },
//     { "box_number": 26, "style_code": "X0DL2082", "color": "Big Red", "size": 18, "quantity": 1 },
//     { "box_number": 25, "style_code": "X0DL2082", "color": "Big Red", "size": 19, "quantity": 5 },
//     { "box_number": 22, "style_code": "X0DL2082", "color": "Big Red", "size": 20, "quantity": 3 },
//     { "box_number": 23, "style_code": "X0DL2082", "color": "Big Red", "size": 20, "quantity": 1 },
//     { "box_number": 38, "style_code": "X0DL2082", "color": "Big Red", "size": 20, "quantity": 7 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "Big Red", "size": 20, "quantity": 5 },
//     { "box_number": 82, "style_code": "X0DL2082", "color": "Big Red", "size": 20, "quantity": 11 },
//     { "box_number": 23, "style_code": "X0DL2082", "color": "Big Red", "size": 21, "quantity": 1 },
//     { "box_number": 38, "style_code": "X0DL2082", "color": "Big Red", "size": 21, "quantity": 1 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "Big Red", "size": 21, "quantity": 9 },
//     { "box_number": 143, "style_code": "X0DL2082", "color": "Big Red", "size": 22, "quantity": 3 },
//     { "box_number": 143, "style_code": "X0DL2082", "color": "Big Red", "size": 22, "quantity": 34 },
//     { "box_number": 143, "style_code": "X0DL2082", "color": "Big Red", "size": 22, "quantity": 2 },
//     { "box_number": 143, "style_code": "X0DL2082", "color": "Big Red", "size": 22, "quantity": 13 },
//     { "box_number": 29, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 10 },
//     { "box_number": 36, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 9 },
//     { "box_number": 82, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 1 },
//     { "box_number": 91, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 9 },
//     { "box_number": 92, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 2 },
//     { "box_number": 93, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 11 },
//     { "box_number": 21, "style_code": "X0DL2082", "color": "Black", "size": 15, "quantity": 6 },
//     { "box_number": 36, "style_code": "X0DL2082", "color": "Black", "size": 21, "quantity": 2 },
//     { "box_number": 22, "style_code": "X0DL2082", "color": "Black", "size": 23, "quantity": 5 },
//     { "box_number": 29, "style_code": "X0DL2082", "color": "Black", "size": 23, "quantity": 5 },
//     { "box_number": 82, "style_code": "X0DL2082", "color": "Black", "size": 23, "quantity": 3 },
//     { "box_number": 40, "style_code": "X0DL2082", "color": "light gray", "size": 19, "quantity": 1 },
//     { "box_number": 24, "style_code": "X0DL2082", "color": "light gray", "size": 20, "quantity": 1 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "light gray", "size": 20, "quantity": 2 },
//     { "box_number": 38, "style_code": "X0DL2082", "color": "light gray", "size": 21, "quantity": 5 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "light gray", "size": 21, "quantity": 6 },
//     { "box_number": 38, "style_code": "X0DL2082", "color": "light gray", "size": 23, "quantity": 5 },
//     { "box_number": 24, "style_code": "X0DL2082", "color": "Pink", "size": 18, "quantity": 4 },
//     { "box_number": 25, "style_code": "X0DL2082", "color": "Pink", "size": 18, "quantity": 3 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "Pink", "size": 18, "quantity": 1 },
//     { "box_number": 27, "style_code": "X0DL2082", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 29, "style_code": "X0DL2082", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "Pink", "size": 19, "quantity": 10 },
//     { "box_number": 29, "style_code": "X0DL2082", "color": "Pink", "size": 21, "quantity": 2 },
//     { "box_number": 39, "style_code": "X0DL2082", "color": "Pink", "size": 21, "quantity": 1 },
//     { "box_number": 82, "style_code": "X0DL2082", "color": "Pink", "size": 22, "quantity": 2 },
//     { "box_number": 82, "style_code": "X0DL2082", "color": "Pink", "size": 22, "quantity": 18 },
//     { "box_number": 82, "style_code": "X0DL2082", "color": "Pink", "size": 22, "quantity": 5 },
//     { "box_number": 93, "style_code": "X0DL2082", "color": "Pink", "size": 23, "quantity": 27 },
//     { "box_number": 26, "style_code": "X0DL2082", "color": "White", "size": 19, "quantity": 2 },
//     { "box_number": 27, "style_code": "X0DL2082", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 26, "style_code": "X0DL2082", "color": "White", "size": 20, "quantity": 5 },
//     { "box_number": 27, "style_code": "X0DL2082", "color": "White", "size": 20, "quantity": 7 },
//     { "box_number": 29, "style_code": "X0DL2082", "color": "White", "size": 20, "quantity": 2 },
//     { "box_number": 29, "style_code": "X0DL2082", "color": "White", "size": 21, "quantity": 5 },
//     { "box_number": 25, "style_code": "X0DL2082", "color": "White", "size": 22, "quantity": 1 },
//     { "box_number": 26, "style_code": "X0DL2082", "color": "White", "size": 22, "quantity": 4 },
//     { "box_number": 38, "style_code": "X0DL2082", "color": "White", "size": 22, "quantity": 12 },
//     { "box_number": 38, "style_code": "X0DL2082", "color": "White", "size": 23, "quantity": 10 },
//     { "box_number": 58, "style_code": "X0DL2085", "color": "Navy blue", "size": 21, "quantity": 3 },
//     { "box_number": 58, "style_code": "X0DL2085", "color": "Navy blue", "size": 22, "quantity": 13 },
//     { "box_number": 58, "style_code": "X0DL2085", "color": "Navy blue", "size": 23, "quantity": 11 },
//     { "box_number": 21, "style_code": "X0DL2085", "color": "Pink", "size": 20, "quantity": 11 },
//     { "box_number": 21, "style_code": "X0DL2085", "color": "Pink", "size": 21, "quantity": 6 },
//     { "box_number": 22, "style_code": "X0DL2085", "color": "Pink", "size": 21, "quantity": 5 },
//     { "box_number": 58, "style_code": "X0DL2085", "color": "Pink", "size": 22, "quantity": 20 },
//     { "box_number": 58, "style_code": "X0DL2085", "color": "Pink", "size": 23, "quantity": 20 },
//     { "box_number": 26, "style_code": "X0DL2085", "color": "Sapphire", "size": 22, "quantity": 8 },
//     { "box_number": 27, "style_code": "X0DL2085", "color": "Sapphire", "size": 22, "quantity": 1 },
//     { "box_number": 58, "style_code": "X0DL2085", "color": "Sapphire", "size": 22, "quantity": 1 },
//     { "box_number": 23, "style_code": "X0DL2085", "color": "Sapphire", "size": 23, "quantity": 5 },
//     { "box_number": 15, "style_code": "X0DQX2500", "color": "Bean Paste Purple", "size": 14, "quantity": 1 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Bean Paste Purple", "size": 16, "quantity": 1 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Bean Paste Purple", "size": 16, "quantity": 13 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Big Red", "size": 15, "quantity": 3 },
//     { "box_number": 14, "style_code": "X0DQX2500", "color": "Big Red", "size": 16, "quantity": 1 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Big Red", "size": 16, "quantity": 2 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Big Red", "size": 16, "quantity": 2 },
//     { "box_number": 8, "style_code": "X0DQX2500", "color": "Gray green", "size": 13, "quantity": 1 },
//     { "box_number": 11, "style_code": "X0DQX2500", "color": "Gray green", "size": 13, "quantity": 1 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Gray green", "size": 13, "quantity": 3 },
//     { "box_number": 11, "style_code": "X0DQX2500", "color": "Gray green", "size": 14, "quantity": 6 },
//     { "box_number": 12, "style_code": "X0DQX2500", "color": "Gray green", "size": 14, "quantity": 6 },
//     { "box_number": 3, "style_code": "X0DQX2500", "color": "Gray green", "size": 15, "quantity": 1 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Gray green", "size": 15, "quantity": 2 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Gray green", "size": 15, "quantity": 2 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Gray green", "size": 16, "quantity": 5 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Gray green", "size": 16, "quantity": 4 },
//     { "box_number": 14, "style_code": "X0DQX2500", "color": "Navy blue", "size": 12, "quantity": 1 },
//     { "box_number": 62, "style_code": "X0DQX2500", "color": "Navy blue", "size": 12, "quantity": 1 },
//     { "box_number": 3, "style_code": "X0DQX2500", "color": "Navy blue", "size": 14, "quantity": 1 },
//     { "box_number": 4, "style_code": "X0DQX2500", "color": "Navy blue", "size": 14, "quantity": 8 },
//     { "box_number": 62, "style_code": "X0DQX2500", "color": "Navy blue", "size": 14, "quantity": 1 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Navy blue", "size": 15, "quantity": 8 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Navy blue", "size": 15, "quantity": 2 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Navy blue", "size": 16, "quantity": 26 },
//     { "box_number": 14, "style_code": "X0DQX2500", "color": "Navy blue red", "size": 16, "quantity": 1 },
//     { "box_number": 6, "style_code": "X0DQX2500", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 6, "style_code": "X0DQX2500", "color": "Pink", "size": 15, "quantity": 2 },
//     { "box_number": 14, "style_code": "X0DQX2500", "color": "Pink", "size": 15, "quantity": 3 },
//     { "box_number": 52, "style_code": "X0DQX2500", "color": "Pink", "size": 15, "quantity": 3 },
//     { "box_number": 15, "style_code": "X0DQX2500", "color": "Pink", "size": 16, "quantity": 10 },
//     { "box_number": 64, "style_code": "X0DQX2500", "color": "Pink", "size": 16, "quantity": 16 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Pink", "size": 16, "quantity": 11 },
//     { "box_number": 65, "style_code": "X0DQX2500", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 67, "style_code": "X0DQX2511", "color": "Big Red", "size": 14, "quantity": 1 },
//     { "box_number": 67, "style_code": "X0DQX2511", "color": "Big Red", "size": 20, "quantity": 1 },
//     { "box_number": 67, "style_code": "X0DQX2511", "color": "Big Red", "size": 22, "quantity": 1 },
//     { "box_number": 4, "style_code": "X0DQX2511", "color": "Black", "size": 20, "quantity": 1 },
//     { "box_number": 4, "style_code": "X0DQX2511", "color": "Blue gray", "size": 23, "quantity": 1 },
//     { "box_number": 4, "style_code": "X0DQX2511", "color": "Lotus root starch", "size": 21, "quantity": 1 },
//     { "box_number": 67, "style_code": "X0DQX2511", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 4, "style_code": "X0DQX2511", "color": "Pink", "size": 23, "quantity": 1 },
//     { "box_number": 9, "style_code": "X0DQX2521", "color": "Golden", "size": 12, "quantity": 19 },
//     { "box_number": 9, "style_code": "X0DQX2521", "color": "Golden", "size": 14, "quantity": 20 },
//     { "box_number": 136, "style_code": "X0DQX2521", "color": "Golden", "size": 15, "quantity": 18 },
//     { "box_number": 136, "style_code": "X0DQX2521", "color": "Golden", "size": 16, "quantity": 16 },
//     { "box_number": 28, "style_code": "X0DQX2521", "color": "Pink", "size": 12, "quantity": 24 },
//     { "box_number": 18, "style_code": "X0DQX2521", "color": "Pink", "size": 13, "quantity": 9 },
//     { "box_number": 28, "style_code": "X0DQX2521", "color": "Pink", "size": 13, "quantity": 12 },
//     { "box_number": 18, "style_code": "X0DQX2521", "color": "Pink", "size": 14, "quantity": 24 },
//     { "box_number": 28, "style_code": "X0DQX2521", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 6, "style_code": "X0DQX2522", "color": "Black", "size": 14, "quantity": 6 },
//     { "box_number": 12, "style_code": "X0DQX2522", "color": "Black", "size": 14, "quantity": 8 },
//     { "box_number": 53, "style_code": "X0DQX2522", "color": "Black", "size": 14, "quantity": 2 },
//     { "box_number": 64, "style_code": "X0DQX2522", "color": "Black", "size": 14, "quantity": 3 },
//     { "box_number": 53, "style_code": "X0DQX2522", "color": "Black", "size": 15, "quantity": 3 },
//     { "box_number": 115, "style_code": "X0DQX2522", "color": "Black", "size": 15, "quantity": 12 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 115, "style_code": "X0DQX2522", "color": "Black", "size": 18, "quantity": 6 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "Black", "size": 18, "quantity": 1 },
//     { "box_number": 14, "style_code": "X0DQX2522", "color": "Black", "size": 19, "quantity": 4 },
//     { "box_number": 53, "style_code": "X0DQX2522", "color": "Black", "size": 19, "quantity": 8 },
//     { "box_number": 64, "style_code": "X0DQX2522", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 115, "style_code": "X0DQX2522", "color": "Black", "size": 20, "quantity": 1 },
//     { "box_number": 115, "style_code": "X0DQX2522", "color": "Black", "size": 20, "quantity": 6 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "Black", "size": 20, "quantity": 6 },
//     { "box_number": 64, "style_code": "X0DQX2522", "color": "White", "size": 14, "quantity": 26 },
//     { "box_number": 12, "style_code": "X0DQX2522", "color": "White", "size": 15, "quantity": 7 },
//     { "box_number": 13, "style_code": "X0DQX2522", "color": "White", "size": 15, "quantity": 1 },
//     { "box_number": 14, "style_code": "X0DQX2522", "color": "White", "size": 16, "quantity": 15 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "White", "size": 17, "quantity": 1 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "White", "size": 17, "quantity": 13 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "White", "size": 17, "quantity": 6 },
//     { "box_number": 11, "style_code": "X0DQX2522", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 12, "style_code": "X0DQX2522", "color": "White", "size": 19, "quantity": 6 },
//     { "box_number": 13, "style_code": "X0DQX2522", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 53, "style_code": "X0DQX2522", "color": "White", "size": 19, "quantity": 4 },
//     { "box_number": 64, "style_code": "X0DQX2522", "color": "White", "size": 19, "quantity": 11 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 137, "style_code": "X0DQX2522", "color": "White", "size": 20, "quantity": 20 },
//     { "box_number": 153, "style_code": "X0RL1280", "color": "Black", "size": 11, "quantity": 8 },
//     { "box_number": 153, "style_code": "X0RL1280", "color": "Black", "size": 12, "quantity": 1 },
//     { "box_number": 153, "style_code": "X0RL1280", "color": "Black", "size": 12, "quantity": 34 },
//     { "box_number": 153, "style_code": "X0RL1280", "color": "Black", "size": 14, "quantity": 17 },
//     { "box_number": 25, "style_code": "X0RL1280", "color": "Pink", "size": 14, "quantity": 9 },
//     { "box_number": 25, "style_code": "X0RL1280", "color": "Pink", "size": 17, "quantity": 8 },
//     { "box_number": 25, "style_code": "X0RL1280", "color": "Pink", "size": 18, "quantity": 1 },
//     { "box_number": 36, "style_code": "X0RL1385", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 29, "style_code": "X0RL1385", "color": "Light green", "size": 17, "quantity": 1 },
//     { "box_number": 24, "style_code": "X0RL1391", "color": "Gray", "size": 16, "quantity": 1 },
//     { "box_number": 24, "style_code": "X0RL1391", "color": "Gray", "size": 17, "quantity": 1 },
//     { "box_number": 21, "style_code": "X0RL1391", "color": "Light coffee", "size": 14, "quantity": 1 },
//     { "box_number": 44, "style_code": "X0RQ2028", "color": "Big Red", "size": 16, "quantity": 1 },
//     { "box_number": 37, "style_code": "X1DA1057", "color": "Orange", "size": 14, "quantity": 6 },
//     { "box_number": 11, "style_code": "X1DA1058", "color": "Blue", "size": 12, "quantity": 4 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Blue", "size": 13, "quantity": 26 },
//     { "box_number": 11, "style_code": "X1DA1058", "color": "Blue", "size": 13, "quantity": 13 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Blue", "size": 14, "quantity": 26 },
//     { "box_number": 11, "style_code": "X1DA1058", "color": "Blue", "size": 14, "quantity": 11 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Brick red", "size": 11, "quantity": 1 },
//     { "box_number": 67, "style_code": "X1DA1058", "color": "Brick red", "size": 12, "quantity": 3 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Brick red", "size": 13, "quantity": 5 },
//     { "box_number": 67, "style_code": "X1DA1058", "color": "Brick red", "size": 13, "quantity": 17 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Brick red", "size": 14, "quantity": 15 },
//     { "box_number": 11, "style_code": "X1DA1058", "color": "Brick red", "size": 14, "quantity": 15 },
//     { "box_number": 67, "style_code": "X1DA1058", "color": "Brick red", "size": 14, "quantity": 10 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Light gray", "size": 12, "quantity": 1 },
//     { "box_number": 11, "style_code": "X1DA1058", "color": "Light gray", "size": 12, "quantity": 3 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Light gray", "size": 13, "quantity": 2 },
//     { "box_number": 11, "style_code": "X1DA1058", "color": "Light gray", "size": 13, "quantity": 9 },
//     { "box_number": 10, "style_code": "X1DA1058", "color": "Light gray", "size": 14, "quantity": 4 },
//     { "box_number": 11, "style_code": "X1DA1058", "color": "Light gray", "size": 14, "quantity": 6 },
//     { "box_number": 158, "style_code": "X1DL2007", "color": "Apricot", "size": 12, "quantity": 20 },
//     { "box_number": 22, "style_code": "X1DL2007", "color": "Apricot", "size": 13, "quantity": 1 },
//     { "box_number": 158, "style_code": "X1DL2007", "color": "Apricot", "size": 13, "quantity": 24 },
//     { "box_number": 158, "style_code": "X1DL2007", "color": "Apricot", "size": 14, "quantity": 5 },
//     { "box_number": 23, "style_code": "X1DL2017", "color": "Bean paste color", "size": 12, "quantity": 2 },
//     { "box_number": 25, "style_code": "X1DL2017", "color": "Bean paste color", "size": 12, "quantity": 1 },
//     { "box_number": 23, "style_code": "X1DL2017", "color": "Bean paste color", "size": 14, "quantity": 2 },
//     { "box_number": 23, "style_code": "X1DL2017", "color": "Gray", "size": 12, "quantity": 2 },
//     { "box_number": 25, "style_code": "X1DL2017", "color": "Navy blue", "size": 14, "quantity": 1 },
//     { "box_number": 1, "style_code": "X1DL2018", "color": "Gray blue", "size": 12, "quantity": 18 },
//     { "box_number": 2, "style_code": "X1DL2018", "color": "Gray blue", "size": 12, "quantity": 22 },
//     { "box_number": 1, "style_code": "X1DL2018", "color": "Gray blue", "size": 13, "quantity": 44 },
//     { "box_number": 1, "style_code": "X1DL2018", "color": "Gray blue", "size": 14, "quantity": 1 },
//     { "box_number": 2, "style_code": "X1DL2018", "color": "Gray blue", "size": 14, "quantity": 39 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Cream Brown", "size": 12, "quantity": 1 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Cream Brown", "size": 13, "quantity": 1 },
//     { "box_number": 112, "style_code": "X1DL2025", "color": "Cream Brown", "size": 14, "quantity": 1 },
//     { "box_number": 111, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 14 },
//     { "box_number": 112, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 8 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 3 },
//     { "box_number": 122, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 1 },
//     { "box_number": 130, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 14 },
//     { "box_number": 111, "style_code": "X1DL2025", "color": "Gray blue", "size": 13, "quantity": 17 },
//     { "box_number": 112, "style_code": "X1DL2025", "color": "Gray blue", "size": 13, "quantity": 2 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Gray blue", "size": 13, "quantity": 3 },
//     { "box_number": 122, "style_code": "X1DL2025", "color": "Gray Blue", "size": 13, "quantity": 2 },
//     { "box_number": 130, "style_code": "X1DL2025", "color": "Gray Blue", "size": 13, "quantity": 16 },
//     { "box_number": 130, "style_code": "X1DL2025", "color": "Gray Blue", "size": 13, "quantity": 1 },
//     { "box_number": 111, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 20 },
//     { "box_number": 112, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 9 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 3 },
//     { "box_number": 122, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 1 },
//     { "box_number": 130, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 9 },
//     { "box_number": 112, "style_code": "X1DL2025", "color": "Gray blue green", "size": 12, "quantity": 22 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Gray blue green", "size": 12, "quantity": 9 },
//     { "box_number": 122, "style_code": "X1DL2025", "color": "Gray blue green", "size": 12, "quantity": 4 },
//     { "box_number": 111, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 5 },
//     { "box_number": 112, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 19 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 5 },
//     { "box_number": 122, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 1 },
//     { "box_number": 130, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 2 },
//     { "box_number": 130, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 2 },
//     { "box_number": 111, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 16 },
//     { "box_number": 112, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 11 },
//     { "box_number": 119, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 7 },
//     { "box_number": 122, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 2 },
//     { "box_number": 130, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 1 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Almond tea", "size": 12, "quantity": 3 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "almond tea", "size": 13, "quantity": 3 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Almond tea", "size": 14, "quantity": 3 },
//     { "box_number": 30, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 8 },
//     { "box_number": 31, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 12 },
//     { "box_number": 123, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 2 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 14 },
//     { "box_number": 30, "style_code": "X1DL2026", "color": "Gray blue", "size": 13, "quantity": 8 },
//     { "box_number": 31, "style_code": "X1DL2026", "color": "Gray blue", "size": 13, "quantity": 12 },
//     { "box_number": 123, "style_code": "X1DL2026", "color": "Gray Blue", "size": 13, "quantity": 12 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Gray Blue", "size": 13, "quantity": 6 },
//     { "box_number": 30, "style_code": "X1DL2026", "color": "Gray Blue", "size": 14, "quantity": 15 },
//     { "box_number": 31, "style_code": "X1DL2026", "color": "Gray Blue", "size": 14, "quantity": 6 },
//     { "box_number": 123, "style_code": "X1DL2026", "color": "Gray Blue", "size": 14, "quantity": 8 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Gray Blue", "size": 14, "quantity": 9 },
//     { "box_number": 30, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 12, "quantity": 19 },
//     { "box_number": 123, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 12, "quantity": 14 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 12, "quantity": 6 },
//     { "box_number": 30, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 13, "quantity": 17 },
//     { "box_number": 31, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 13, "quantity": 2 },
//     { "box_number": 123, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 13, "quantity": 15 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 13, "quantity": 3 },
//     { "box_number": 30, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 14, "quantity": 17 },
//     { "box_number": 31, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 14, "quantity": 4 },
//     { "box_number": 123, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 14, "quantity": 21 },
//     { "box_number": 124, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 9, "style_code": "X1RL1318", "color": "Light blue", "size": 10, "quantity": 7 },
//     { "box_number": 15, "style_code": "X1RL1318", "color": "Light blue", "size": 10, "quantity": 2 },
//     { "box_number": 8, "style_code": "X1RL1318", "color": "Light blue", "size": 11, "quantity": 2 },
//     { "box_number": 8, "style_code": "X1RL1318", "color": "Light blue", "size": 12, "quantity": 3 },
//     { "box_number": 8, "style_code": "X1RL1318", "color": "Light blue", "size": 13, "quantity": 5 },
//     { "box_number": 8, "style_code": "X1RL1318", "color": "light blue", "size": 14, "quantity": 1 },
//     { "box_number": 8, "style_code": "X1RL1318", "color": "Light gray", "size": 14, "quantity": 2 },
//     { "box_number": 8, "style_code": "X1RL1318", "color": "Navy blue", "size": 12, "quantity": 3 },
//     { "box_number": 10, "style_code": "X1RL1318", "color": "Navy blue", "size": 12, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325", "color": "Black", "size": 13, "quantity": 8 },
//     { "box_number": 62, "style_code": "X1RL1325", "color": "Black", "size": 14, "quantity": 10 },
//     { "box_number": 62, "style_code": "X1RL1325", "color": "Black", "size": 15, "quantity": 7 },
//     { "box_number": 4, "style_code": "X1RL1325", "color": "Black", "size": 16, "quantity": 7 },
//     { "box_number": 6, "style_code": "X1RL1325", "color": "Black", "size": 16, "quantity": 6 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "Black", "size": 16, "quantity": 1 },
//     { "box_number": 35, "style_code": "X1RL1325", "color": "Black", "size": 16, "quantity": 2 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "Black", "size": 16, "quantity": 4 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "Black", "size": 16, "quantity": 10 },
//     { "box_number": 4, "style_code": "X1RL1325", "color": "Black", "size": 17, "quantity": 6 },
//     { "box_number": 6, "style_code": "X1RL1325", "color": "Black", "size": 17, "quantity": 6 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "Black", "size": 17, "quantity": 4 },
//     { "box_number": 35, "style_code": "X1RL1325", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "Black", "size": 18, "quantity": 4 },
//     { "box_number": 35, "style_code": "X1RL1325", "color": "Black", "size": 18, "quantity": 3 },
//     { "box_number": 37, "style_code": "X1RL1325", "color": "Black", "size": 18, "quantity": 2 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "Black", "size": 19, "quantity": 3 },
//     { "box_number": 35, "style_code": "X1RL1325", "color": "Black", "size": 19, "quantity": 4 },
//     { "box_number": 37, "style_code": "X1RL1325", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 94, "style_code": "X1RL1325", "color": "black", "size": 20, "quantity": 5 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "black", "size": 20, "quantity": 1 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "dark gray", "size": 16, "quantity": 1 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "dark gray", "size": 16, "quantity": 2 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "dark gray", "size": 17, "quantity": 2 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "dark gray", "size": 17, "quantity": 3 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "dark gray", "size": 18, "quantity": 3 },
//     { "box_number": 8, "style_code": "X1RL1325", "color": "dark gray", "size": 18, "quantity": 1 },
//     { "box_number": 12, "style_code": "X1RL1325", "color": "dark gray", "size": 18, "quantity": 3 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "dark gray", "size": 19, "quantity": 4 },
//     { "box_number": 35, "style_code": "X1RL1325", "color": "dark gray", "size": 19, "quantity": 2 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "dark gray", "size": 20, "quantity": 3 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "dark gray", "size": 20, "quantity": 1 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "White", "size": 17, "quantity": 5 },
//     { "box_number": 6, "style_code": "X1RL1325", "color": "White", "size": 18, "quantity": 6 },
//     { "box_number": 7, "style_code": "X1RL1325", "color": "White", "size": 18, "quantity": 5 },
//     { "box_number": 94, "style_code": "X1RL1325", "color": "White", "size": 18, "quantity": 4 },
//     { "box_number": 104, "style_code": "X1RL1325", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 8, "style_code": "X1RL1325", "color": "White", "size": 20, "quantity": 7 },
//     { "box_number": 46, "style_code": "X1RL1325M", "color": "Black", "size": 16, "quantity": 1 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "Black", "size": 16, "quantity": 1 },
//     { "box_number": 47, "style_code": "X1RL1325M", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "Black", "size": 17, "quantity": 8 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 17, "quantity": 4 },
//     { "box_number": 47, "style_code": "X1RL1325M", "color": "Black", "size": 18, "quantity": 13 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "Black", "size": 18, "quantity": 7 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 18, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 18, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 18, "quantity": 4 },
//     { "box_number": 46, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 4 },
//     { "box_number": 47, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 3 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 3 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 6 },
//     { "box_number": 7, "style_code": "X1RL1325M", "color": "Black", "size": 20, "quantity": 20 },
//     { "box_number": 9, "style_code": "X1RL1325M", "color": "Black", "size": 20, "quantity": 2 },
//     { "box_number": 35, "style_code": "X1RL1325M", "color": "Dark gray", "size": 16, "quantity": 7 },
//     { "box_number": 60, "style_code": "X1RL1325M", "color": "Dark gray", "size": 16, "quantity": 9 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 16, "quantity": 14 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 16, "quantity": 6 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 16, "quantity": 2 },
//     { "box_number": 7, "style_code": "X1RL1325M", "color": "Dark gray", "size": 17, "quantity": 3 },
//     { "box_number": 15, "style_code": "X1RL1325M", "color": "Dark gray", "size": 17, "quantity": 4 },
//     { "box_number": 35, "style_code": "X1RL1325M", "color": "Dark gray", "size": 17, "quantity": 6 },
//     { "box_number": 47, "style_code": "X1RL1325M", "color": "Dark gray", "size": 17, "quantity": 11 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "Dark gray", "size": 17, "quantity": 5 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 17, "quantity": 1 },
//     { "box_number": 46, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 1 },
//     { "box_number": 47, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 2 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 3 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 15 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 6 },
//     { "box_number": 46, "style_code": "X1RL1325M", "color": "Dark gray", "size": 19, "quantity": 2 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "Dark gray", "size": 19, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 19, "quantity": 9 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 19, "quantity": 9 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 19, "quantity": 5 },
//     { "box_number": 7, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 2 },
//     { "box_number": 35, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 6 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 5 },
//     { "box_number": 60, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 6 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 10 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 5 },
//     { "box_number": 46, "style_code": "X1RL1325M", "color": "White", "size": 16, "quantity": 9 },
//     { "box_number": 47, "style_code": "X1RL1325M", "color": "White", "size": 16, "quantity": 10 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "White", "size": 17, "quantity": 14 },
//     { "box_number": 60, "style_code": "X1RL1325M", "color": "White", "size": 17, "quantity": 4 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "White", "size": 17, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1325M", "color": "White", "size": 18, "quantity": 6 },
//     { "box_number": 3, "style_code": "X1RL1325M", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 7, "style_code": "X1RL1325M", "color": "White", "size": 19, "quantity": 4 },
//     { "box_number": 13, "style_code": "X1RL1325M", "color": "White", "size": 19, "quantity": 19 },
//     { "box_number": 59, "style_code": "X1RL1325M", "color": "White", "size": 20, "quantity": 13 },
//     { "box_number": 5, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 51 },
//     { "box_number": 6, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 8, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 3 },
//     { "box_number": 9, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 2 },
//     { "box_number": 12, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 5 },
//     { "box_number": 13, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 4 },
//     { "box_number": 35, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 13, "style_code": "X1RL1325S", "color": "Dark gray", "size": 13, "quantity": 1 },
//     { "box_number": 35, "style_code": "X1RL1325S", "color": "Dark gray", "size": 13, "quantity": 2 },
//     { "box_number": 35, "style_code": "X1RL1325S", "color": "Dark gray", "size": 14, "quantity": 6 },
//     { "box_number": 35, "style_code": "X1RL1325S", "color": "Dark gray", "size": 15, "quantity": 2 },
//     { "box_number": 62, "style_code": "X1RL1325S", "color": "Dark gray", "size": 15, "quantity": 1 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Big Red", "size": 12, "quantity": 10 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Big red", "size": 12, "quantity": 1 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Big Red", "size": 15, "quantity": 5 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Big Red", "size": 16, "quantity": 2 },
//     { "box_number": 62, "style_code": "X1RL1326", "color": "Big Red", "size": 17, "quantity": 1 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Big Red", "size": 17, "quantity": 3 },
//     { "box_number": 62, "style_code": "X1RL1326", "color": "Big Red", "size": 20, "quantity": 1 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Big Red", "size": 20, "quantity": 1 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Dahon", "size": 13, "quantity": 1 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Dahon", "size": 14, "quantity": 4 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Dahon", "size": 15, "quantity": 4 },
//     { "box_number": 64, "style_code": "X1RL1326", "color": "Dahon", "size": 15, "quantity": 1 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Dahon", "size": 16, "quantity": 7 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Dahon", "size": 16, "quantity": 1 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Dahon", "size": 18, "quantity": 1 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Dahon", "size": 19, "quantity": 3 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 12, "quantity": 3 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 12, "quantity": 4 },
//     { "box_number": 62, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 13, "quantity": 3 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 13, "quantity": 1 },
//     { "box_number": 62, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 14, "quantity": 3 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 14, "quantity": 3 },
//     { "box_number": 62, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 15, "quantity": 4 },
//     { "box_number": 63, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 15, "quantity": 6 },
//     { "box_number": 62, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 17, "quantity": 1 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 17, "quantity": 1 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 18, "quantity": 1 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Royal Blue", "size": 16, "quantity": 3 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Sapphire", "size": 17, "quantity": 2 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Sapphire", "size": 19, "quantity": 2 },
//     { "box_number": 62, "style_code": "X1RL1326", "color": "Sapphire", "size": 20, "quantity": 2 },
//     { "box_number": 132, "style_code": "X1RL1326", "color": "Sapphire Blue", "size": 18, "quantity": 2 },
//     { "box_number": 8, "style_code": "X1RL1326S", "color": "no", "size": "", "quantity": 10 },
//     { "box_number": 8, "style_code": "X1RL1326S", "color": "no", "size": "", "quantity": 2 },
//     { "box_number": 63, "style_code": "X1RL1326S", "color": "no", "size": "", "quantity": 1 },
//     { "box_number": 63, "style_code": "X1RL1326S", "color": "no", "size": "", "quantity": 1 },
//     { "box_number": 37, "style_code": "X1RQ1638", "color": "dark gray", "size": 11, "quantity": 6 },
//     { "box_number": 37, "style_code": "X1RQ1638", "color": "dark gray", "size": 12, "quantity": 3 },
//     { "box_number": 37, "style_code": "X1RQ1638", "color": "dark gray", "size": 13, "quantity": 5 },
//     { "box_number": 44, "style_code": "X1RQ1638", "color": "Gray", "size": 10, "quantity": 1 },
//     { "box_number": 37, "style_code": "X1RQ1638", "color": "Gray", "size": 11, "quantity": 5 },
//     { "box_number": 37, "style_code": "X1RQ1638", "color": "Gray", "size": 12, "quantity": 5 },
//     { "box_number": 37, "style_code": "X1RQ1638", "color": "Gray", "size": 13, "quantity": 5 },
//     { "box_number": 44, "style_code": "X2DA1029", "color": "dark gray", "size": 12, "quantity": 12 },
//     { "box_number": 44, "style_code": "X2DA1029", "color": "dark gray", "size": 13, "quantity": 11 },
//     { "box_number": 44, "style_code": "X2DA1029", "color": "light green", "size": 12, "quantity": 1 },
//     { "box_number": 44, "style_code": "X2DA1029", "color": "light green", "size": 13, "quantity": 2 },
//     { "box_number": 44, "style_code": "X2DA1029", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 44, "style_code": "X2DA1029", "color": "Pink", "size": 12, "quantity": 5 },
//     { "box_number": 44, "style_code": "X2DA1029", "color": "Pink", "size": 13, "quantity": 5 },
//     { "box_number": 44, "style_code": "X2DA1030", "color": "light green", "size": 12, "quantity": 5 },
//     { "box_number": 44, "style_code": "X2DA1030", "color": "light green", "size": 13, "quantity": 5 },
//     { "box_number": 154, "style_code": "X2DA1030", "color": "Navy blue", "size": 14, "quantity": 38 },
//     { "box_number": 154, "style_code": "X2DA1030", "color": "Navy blue", "size": 15, "quantity": 43 },
//     { "box_number": 154, "style_code": "X2DA1030", "color": "Navy blue", "size": 16, "quantity": 31 },
//     { "box_number": 44, "style_code": "X2DA1030", "color": "Pink", "size": 12, "quantity": 11 },
//     { "box_number": 44, "style_code": "X2DA1030", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Orange", "size": 12, "quantity": 2 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Orange", "size": 14, "quantity": 2 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Pink", "size": 12, "quantity": 2 },
//     { "box_number": 46, "style_code": "X2DA1072", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 46, "style_code": "X2DA1072", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Pink", "size": 14, "quantity": 4 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Yellow", "size": 12, "quantity": 2 },
//     { "box_number": 46, "style_code": "X2DA1072", "color": "Yellow", "size": 12, "quantity": 3 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Yellow", "size": 13, "quantity": 3 },
//     { "box_number": 46, "style_code": "X2DA1072", "color": "Yellow", "size": 13, "quantity": 2 },
//     { "box_number": 44, "style_code": "X2DA1072", "color": "Yellow", "size": 14, "quantity": 4 },
//     { "box_number": 46, "style_code": "X2DA1072", "color": "Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Dark pink", "size": 11, "quantity": 3 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 11, "quantity": 1 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 11, "quantity": 1 },
//     { "box_number": 23, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 8 },
//     { "box_number": 25, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 3 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 1 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 1 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 1 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 9 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 1 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 3 },
//     { "box_number": 26, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 3 },
//     { "box_number": 27, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 1 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 7 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 11 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 4 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 2 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 4 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 1 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 2 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 5 },
//     { "box_number": 29, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 1 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 3 },
//     { "box_number": 86, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 22 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 7 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 6 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 4 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 4 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 2 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 3 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 6 },
//     { "box_number": 86, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 23 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 11 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 3 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 3 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 1 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 1 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 3 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 11, "quantity": 5 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 1 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 1 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 4 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 1 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 2 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 3 },
//     { "box_number": 25, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 2 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 6 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 3 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 1 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 1 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 1 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 10 },
//     { "box_number": 25, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 3 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 3 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 9 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 7 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 3 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 2 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 1 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 15 },
//     { "box_number": 25, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 4 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 10 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 7 },
//     { "box_number": 84, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 6 },
//     { "box_number": 86, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 6 },
//     { "box_number": 95, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 6 },
//     { "box_number": 96, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 7 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 3 },
//     { "box_number": 114, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 1 },
//     { "box_number": 22, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 69, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 23, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 10 },
//     { "box_number": 24, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 7 },
//     { "box_number": 26, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 2 },
//     { "box_number": 27, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 5 },
//     { "box_number": 36, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 8 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 11 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 6 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 14, "quantity": 16 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Pink", "size": 15, "quantity": 10 },
//     { "box_number": 25, "style_code": "X2DL2011", "color": "Sauce red", "size": 11, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 11, "quantity": 5 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 11, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 11, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 11, "quantity": 3 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 12, "quantity": 6 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 12, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 12, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 12, "quantity": 1 },
//     { "box_number": 22, "style_code": "X2DL2011", "color": "Sauce red", "size": 13, "quantity": 5 },
//     { "box_number": 25, "style_code": "X2DL2011", "color": "Sauce red", "size": 13, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 13, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 13, "quantity": 3 },
//     { "box_number": 29, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 1 },
//     { "box_number": 69, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 10 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 12 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 18 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 8 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 14, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 15, "quantity": 7 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Sauce red", "size": 15, "quantity": 21 },
//     { "box_number": 21, "style_code": "X2DL2011", "color": "Yellow", "size": 11, "quantity": 1 },
//     { "box_number": 22, "style_code": "X2DL2011", "color": "Yellow", "size": 11, "quantity": 4 },
//     { "box_number": 23, "style_code": "X2DL2011", "color": "Yellow", "size": 11, "quantity": 5 },
//     { "box_number": 24, "style_code": "X2DL2011", "color": "Yellow", "size": 11, "quantity": 5 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 11, "quantity": 4 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 13, "quantity": 1 },
//     { "box_number": 24, "style_code": "X2DL2011", "color": "Yellow", "size": 14, "quantity": 6 },
//     { "box_number": 36, "style_code": "X2DL2011", "color": "Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 14, "quantity": 3 },
//     { "box_number": 21, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 1 },
//     { "box_number": 24, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 3 },
//     { "box_number": 27, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 13 },
//     { "box_number": 69, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 2 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 1 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 8 },
//     { "box_number": 70, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 1 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Green bean paste", "size": 13, "quantity": 1 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Green bean paste", "size": 13, "quantity": 2 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Green bean paste", "size": 13, "quantity": 1 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Green bean paste", "size": 13, "quantity": 2 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 1 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 1 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 11 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 3 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 10 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 1 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 1 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 2 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 8 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 5 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Green bean paste", "size": 15, "quantity": 13 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Green bean paste", "size": 15, "quantity": 11 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Green bean paste", "size": 15, "quantity": 3 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Green bean paste", "size": 15, "quantity": 7 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Green bean paste", "size": 15, "quantity": 12 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Shacha red", "size": 11, "quantity": 1 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Shacha red", "size": 13, "quantity": 1 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Shacha red", "size": 13, "quantity": 1 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Shacha red", "size": 13, "quantity": 1 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Shacha red", "size": 14, "quantity": 1 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Shacha red", "size": 14, "quantity": 1 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Shacha red", "size": 14, "quantity": 7 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Shacha red", "size": 14, "quantity": 7 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Shacha red", "size": 14, "quantity": 6 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Shacha red", "size": 15, "quantity": 1 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Shacha red", "size": 15, "quantity": 10 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Shacha red", "size": 15, "quantity": 8 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Shacha red", "size": 15, "quantity": 4 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Shacha red", "size": 15, "quantity": 4 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Shacha red", "size": 15, "quantity": 5 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Yellow", "size": 11, "quantity": 1 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Yellow", "size": 11, "quantity": 2 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Yellow", "size": 12, "quantity": 5 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Yellow", "size": 12, "quantity": 1 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Yellow", "size": 12, "quantity": 2 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Yellow", "size": 13, "quantity": 6 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Yellow", "size": 13, "quantity": 4 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 3 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 9 },
//     { "box_number": 80, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 4 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 9 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 3 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 15 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 5 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Yellow", "size": 15, "quantity": 10 },
//     { "box_number": 40, "style_code": "X2DL2012", "color": "Yellow", "size": 15, "quantity": 5 },
//     { "box_number": 108, "style_code": "X2DL2012", "color": "Yellow", "size": 15, "quantity": 6 },
//     { "box_number": 150, "style_code": "X2DL2012", "color": "Yellow", "size": 15, "quantity": 8 },
//     { "box_number": 157, "style_code": "X2DL2012", "color": "Yellow", "size": 15, "quantity": 17 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Golden", "size": 11, "quantity": 1 },
//     { "box_number": 46, "style_code": "X2DL2013", "color": "Golden", "size": 11, "quantity": 1 },
//     { "box_number": 53, "style_code": "X2DL2013", "color": "Golden", "size": 11, "quantity": 12 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Golden", "size": 11, "quantity": 1 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Golden", "size": 11, "quantity": 4 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Golden", "size": 11, "quantity": 1 },
//     { "box_number": 13, "style_code": "X2DL2013", "color": "Golden", "size": 12, "quantity": 2 },
//     { "box_number": 15, "style_code": "X2DL2013", "color": "Golden", "size": 12, "quantity": 7 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Golden", "size": 12, "quantity": 2 },
//     { "box_number": 103, "style_code": "X2DL2013", "color": "Golden", "size": 12, "quantity": 1 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Golden", "size": 12, "quantity": 1 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Golden", "size": 12, "quantity": 5 },
//     { "box_number": 15, "style_code": "X2DL2013", "color": "Golden", "size": 13, "quantity": 8 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Golden", "size": 13, "quantity": 5 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Golden", "size": 13, "quantity": 5 },
//     { "box_number": 14, "style_code": "X2DL2013", "color": "Golden", "size": 14, "quantity": 2 },
//     { "box_number": 16, "style_code": "X2DL2013", "color": "Golden", "size": 14, "quantity": 3 },
//     { "box_number": 44, "style_code": "X2DL2013", "color": "Golden", "size": 14, "quantity": 3 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Golden", "size": 14, "quantity": 2 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Golden", "size": 14, "quantity": 6 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Golden", "size": 14, "quantity": 6 },
//     { "box_number": 44, "style_code": "X2DL2013", "color": "Golden", "size": 15, "quantity": 4 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Golden", "size": 15, "quantity": 10 },
//     { "box_number": 103, "style_code": "X2DL2013", "color": "Golden", "size": 15, "quantity": 6 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Golden", "size": 15, "quantity": 1 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Golden", "size": 15, "quantity": 9 },
//     { "box_number": 15, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 1 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 3 },
//     { "box_number": 46, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 1 },
//     { "box_number": 103, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 12 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 3 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 2 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 3 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Silver", "size": 12, "quantity": 3 },
//     { "box_number": 46, "style_code": "X2DL2013", "color": "Silver", "size": 12, "quantity": 1 },
//     { "box_number": 103, "style_code": "X2DL2013", "color": "Silver", "size": 12, "quantity": 10 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 12, "quantity": 3 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 12, "quantity": 5 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Silver", "size": 12, "quantity": 3 },
//     { "box_number": 14, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 1 },
//     { "box_number": 15, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 3 },
//     { "box_number": 16, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 16 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 3 },
//     { "box_number": 46, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 1 },
//     { "box_number": 103, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 12 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 7 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 3 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 2 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 1 },
//     { "box_number": 4, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 9 },
//     { "box_number": 44, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 8 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 10 },
//     { "box_number": 46, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 1 },
//     { "box_number": 53, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 11 },
//     { "box_number": 103, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 2 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 9 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 4 },
//     { "box_number": 44, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 12 },
//     { "box_number": 45, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 15 },
//     { "box_number": 46, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 2 },
//     { "box_number": 53, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 4 },
//     { "box_number": 103, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 8 },
//     { "box_number": 127, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 5 },
//     { "box_number": 149, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 6 },
//     { "box_number": 34, "style_code": "X2DL2028", "color": "Gray blue", "size": 12, "quantity": 14 },
//     { "box_number": 34, "style_code": "X2DL2028", "color": "Gray blue", "size": 13, "quantity": 14 },
//     { "box_number": 34, "style_code": "X2DL2028", "color": "Gray Blue", "size": 14, "quantity": 13 },
//     { "box_number": 31, "style_code": "X2DL2028", "color": "Leather powder", "size": 12, "quantity": 11 },
//     { "box_number": 32, "style_code": "X2DL2028", "color": "Leather powder", "size": 12, "quantity": 11 },
//     { "box_number": 34, "style_code": "X2DL2028", "color": "Leather powder", "size": 12, "quantity": 3 },
//     { "box_number": 34, "style_code": "X2DL2028", "color": "Leather powder", "size": 14, "quantity": 21 },
//     { "box_number": 34, "style_code": "X2DL2028", "color": "Skin powder", "size": 13, "quantity": 30 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Cream Brown", "size": 12, "quantity": 1 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Cream Brown", "size": 13, "quantity": 2 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Cream Brown", "size": 13, "quantity": 2 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Cream Brown", "size": 14, "quantity": 3 },
//     { "box_number": 32, "style_code": "X2DL2030", "color": "Gray blue green", "size": 12, "quantity": 1 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Gray blue green", "size": 12, "quantity": 9 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Gray blue green", "size": 12, "quantity": 13 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Gray blue green", "size": 12, "quantity": 18 },
//     { "box_number": 31, "style_code": "X2DL2030", "color": "Gray blue green", "size": 13, "quantity": 2 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Gray blue green", "size": 13, "quantity": 15 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Gray blue green", "size": 13, "quantity": 28 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Gray blue green", "size": 13, "quantity": 2 },
//     { "box_number": 31, "style_code": "X2DL2030", "color": "Gray blue green", "size": 14, "quantity": 2 },
//     { "box_number": 32, "style_code": "X2DL2030", "color": "Gray blue green", "size": 14, "quantity": 2 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Gray blue green", "size": 14, "quantity": 11 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Gray blue green", "size": 14, "quantity": 31 },
//     { "box_number": 32, "style_code": "X2DL2030", "color": "Lotus color", "size": 12, "quantity": 1 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Lotus color", "size": 12, "quantity": 15 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 12, "quantity": 2 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 12, "quantity": 7 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 12, "quantity": 20 },
//     { "box_number": 32, "style_code": "X2DL2030", "color": "Lotus color", "size": 13, "quantity": 1 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Lotus color", "size": 13, "quantity": 15 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 13, "quantity": 1 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 13, "quantity": 15 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 13, "quantity": 10 },
//     { "box_number": 33, "style_code": "X2DL2030", "color": "Lotus color", "size": 14, "quantity": 14 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 14, "quantity": 4 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 14, "quantity": 8 },
//     { "box_number": 34, "style_code": "X2DL2030", "color": "Lotus color", "size": 14, "quantity": 20 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Big Red", "size": 19, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Big Red", "size": 20, "quantity": 2 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Big Red", "size": 21, "quantity": 4 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Big Red", "size": 22, "quantity": 7 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Big Red", "size": 23, "quantity": 3 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Pink", "size": 16, "quantity": 8 },
//     { "box_number": 41, "style_code": "X2DL2033", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2033", "color": "Pink", "size": 19, "quantity": 3 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Pink", "size": 19, "quantity": 2 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Pink", "size": 20, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Pink", "size": 22, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Pink", "size": 23, "quantity": 3 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Purple", "size": 17, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Purple", "size": 19, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Purple", "size": 21, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Purple", "size": 22, "quantity": 1 },
//     { "box_number": 42, "style_code": "X2DL2033", "color": "Purple", "size": 23, "quantity": 1 },
//     { "box_number": 45, "style_code": "X2DL2057", "color": "Apricot", "size": 12, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Apricot", "size": 13, "quantity": 2 },
//     { "box_number": 11, "style_code": "X2DL2057", "color": "Apricot", "size": 14, "quantity": 3 },
//     { "box_number": 13, "style_code": "X2DL2057", "color": "Apricot", "size": 14, "quantity": 3 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Apricot", "size": 14, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Apricot", "size": 15, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Apricot", "size": 16, "quantity": 1 },
//     { "box_number": 67, "style_code": "X2DL2057", "color": "Apricot", "size": 16, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 67, "style_code": "X2DL2057", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Yellow", "size": 12, "quantity": 1 },
//     { "box_number": 13, "style_code": "X2DL2057", "color": "Yellow", "size": 13, "quantity": 8 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Yellow", "size": 13, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Yellow", "size": 14, "quantity": 3 },
//     { "box_number": 67, "style_code": "X2DL2057", "color": "Yellow", "size": 15, "quantity": 1 },
//     { "box_number": 41, "style_code": "X2DL2057", "color": "Yellow", "size": 16, "quantity": 1 },
//     { "box_number": 66, "style_code": "X2DL2058", "color": "Apricot", "size": 12, "quantity": 1 },
//     { "box_number": 67, "style_code": "X2DL2058", "color": "Apricot", "size": 12, "quantity": 5 },
//     { "box_number": 14, "style_code": "X2DL2058", "color": "Apricot", "size": 16, "quantity": 5 },
//     { "box_number": 15, "style_code": "X2DL2058", "color": "Apricot", "size": 16, "quantity": 7 },
//     { "box_number": 66, "style_code": "X2DL2058", "color": "Apricot", "size": 16, "quantity": 1 },
//     { "box_number": 46, "style_code": "X2DL2058", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 67, "style_code": "X2DL2058", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 67, "style_code": "X2DL2058", "color": "Pink", "size": 12, "quantity": 2 },
//     { "box_number": 66, "style_code": "X2DL2058", "color": "Pink", "size": 13, "quantity": 2 },
//     { "box_number": 46, "style_code": "X2DL2058", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 67, "style_code": "X2DL2058", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 12, "style_code": "X2DL2058", "color": "Pink", "size": 15, "quantity": 4 },
//     { "box_number": 13, "style_code": "X2DL2058", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 4, "style_code": "X2DL2058", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 15, "style_code": "X2DL2058", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 45, "style_code": "X2DL2058", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 67, "style_code": "X2DL2058", "color": "Pink", "size": 16, "quantity": 2 },
//     { "box_number": 66, "style_code": "X2DL2058", "color": "Taro powder", "size": 12, "quantity": 1 },
//     { "box_number": 66, "style_code": "X2DL2058", "color": "Taro powder", "size": 14, "quantity": 1 },
//     { "box_number": 23, "style_code": "X2RL1321", "color": "Pink", "size": 11, "quantity": 23 },
//     { "box_number": 27, "style_code": "X2RL1321", "color": "Pink", "size": 11, "quantity": 2 },
//     { "box_number": 151, "style_code": "X2RL1321", "color": "Pink", "size": 11, "quantity": 7 },
//     { "box_number": 151, "style_code": "X2RL1321", "color": "Pink", "size": 12, "quantity": 21 },
//     { "box_number": 23, "style_code": "X2RL1321", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 26, "style_code": "X2RL1321", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 27, "style_code": "X2RL1321", "color": "Pink", "size": 13, "quantity": 15 },
//     { "box_number": 27, "style_code": "X2RL1321", "color": "Pink", "size": 14, "quantity": 18 },
//     { "box_number": 151, "style_code": "X2RL1321", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 141, "style_code": "X2RL1327M", "color": "Black", "size": 16, "quantity": 6 },
//     { "box_number": 141, "style_code": "X2RL1327M", "color": "Black", "size": 17, "quantity": 15 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Black", "size": 17, "quantity": 3 },
//     { "box_number": 141, "style_code": "X2RL1327M", "color": "Black", "size": 18, "quantity": 1 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Black", "size": 18, "quantity": 2 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Black", "size": 19, "quantity": 2 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Black", "size": 19, "quantity": 9 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Black", "size": 20, "quantity": 9 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Black", "size": 20, "quantity": 9 },
//     { "box_number": 141, "style_code": "X2RL1327M", "color": "Meat powder", "size": 16, "quantity": 11 },
//     { "box_number": 141, "style_code": "X2RL1327M", "color": "Meat powder", "size": 17, "quantity": 7 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Meat powder", "size": 18, "quantity": 14 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Meat powder", "size": 19, "quantity": 15 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Meat powder", "size": 20, "quantity": 11 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Meat powder", "size": 20, "quantity": 2 },
//     { "box_number": 142, "style_code": "X2RL1327M", "color": "Meat powder", "size": 20, "quantity": 3 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Big red", "size": 12, "quantity": 4 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Big red", "size": 12, "quantity": 3 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 12, "quantity": 1 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 12, "quantity": 4 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 13, "quantity": 11 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 13, "quantity": 3 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 14, "quantity": 10 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 14, "quantity": 2 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 15, "quantity": 10 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Black", "size": 15, "quantity": 3 },
//     { "box_number": 36, "style_code": "X2RL1328", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Dahon", "size": 13, "quantity": 3 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Dahon", "size": 13, "quantity": 5 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Dahon", "size": 13, "quantity": 6 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Dahon", "size": 14, "quantity": 8 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Dahon", "size": 14, "quantity": 1 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Dahon", "size": 15, "quantity": 8 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Dahon", "size": 15, "quantity": 6 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Pink", "size": 12, "quantity": 5 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Pink", "size": 13, "quantity": 10 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Pink", "size": 13, "quantity": 4 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Pink", "size": 14, "quantity": 10 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Pink", "size": 14, "quantity": 5 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Pink", "size": 15, "quantity": 9 },
//     { "box_number": 90, "style_code": "X2RL1328", "color": "Pink", "size": 15, "quantity": 6 },
//     { "box_number": 21, "style_code": "X2RL1328", "color": "Pink", "size": 16, "quantity": 5 },
//     { "box_number": 44, "style_code": "X2RQ1652", "color": "Big Red", "size": 10, "quantity": 1 },
//     { "box_number": 44, "style_code": "X2RQ1652", "color": "Gray", "size": 10, "quantity": 1 },
//     { "box_number": 44, "style_code": "X2RQ1652", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Blue", "size": 12, "quantity": 2 },
//     { "box_number": 44, "style_code": "XE100039", "color": "Blue", "size": 12, "quantity": 2 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Blue", "size": 13, "quantity": 6 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Blue", "size": 13, "quantity": 1 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Blue", "size": 14, "quantity": 3 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Blue", "size": 14, "quantity": 8 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Blue", "size": 15, "quantity": 7 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Blue", "size": 16, "quantity": 4 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Pink", "size": 12, "quantity": 6 },
//     { "box_number": 44, "style_code": "XE100039", "color": "Pink", "size": 12, "quantity": 4 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Pink", "size": 13, "quantity": 10 },
//     { "box_number": 44, "style_code": "XE100039", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 42, "style_code": "XE100039", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Pink", "size": 14, "quantity": 7 },
//     { "box_number": 62, "style_code": "XE100039", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 66, "style_code": "XE100039", "color": "Pink", "size": 14, "quantity": 2 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Pink", "size": 15, "quantity": 6 },
//     { "box_number": 44, "style_code": "XE100039", "color": "Pink", "size": 16, "quantity": 6 },
//     { "box_number": 62, "style_code": "XE100039", "color": "Pink", "size": 16, "quantity": 3 },
//     { "box_number": 66, "style_code": "XE100039", "color": "Pink", "size": 16, "quantity": 2 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Yellow", "size": 12, "quantity": 3 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Yellow", "size": 13, "quantity": 4 },
//     { "box_number": 42, "style_code": "XE100039", "color": "Yellow", "size": 15, "quantity": 1 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Yellow", "size": 15, "quantity": 5 },
//     { "box_number": 41, "style_code": "XE100039", "color": "Yellow", "size": 16, "quantity": 1 },
//     { "box_number": 43, "style_code": "XE100039", "color": "Yellow", "size": 16, "quantity": 7 },
//     { "box_number": 3, "style_code": "XE100052", "color": "Gray", "size": 12, "quantity": 1 },
//     { "box_number": 3, "style_code": "XE100052", "color": "Gray", "size": 13, "quantity": 1 },
//     { "box_number": 14, "style_code": "XE100052", "color": "Gray", "size": 13, "quantity": 1 },
//     { "box_number": 3, "style_code": "XE100052", "color": "Gray", "size": 16, "quantity": 1 },
//     { "box_number": 19, "style_code": "XE100052", "color": "Khaki", "size": 12, "quantity": 1 },
//     { "box_number": 19, "style_code": "XE100052", "color": "Khaki", "size": 13, "quantity": 1 },
//     { "box_number": 19, "style_code": "XE100052", "color": "Khaki", "size": 14, "quantity": 25 },
//     { "box_number": 19, "style_code": "XE100052", "color": "Khaki", "size": 15, "quantity": 29 },
//     { "box_number": 14, "style_code": "XE100052", "color": "Khaki", "size": 16, "quantity": 6 },
//     { "box_number": 15, "style_code": "XE100052", "color": "Khaki", "size": 16, "quantity": 5 },
//     { "box_number": 19, "style_code": "XE100052", "color": "Khaki", "size": 16, "quantity": 2 },
//     { "box_number": 19, "style_code": "XE100052", "color": "Pink", "size": 14, "quantity": 3 },
//     { "box_number": 135, "style_code": "XE100053", "color": "Blue", "size": 14, "quantity": 12 },
//     { "box_number": 135, "style_code": "XE100053", "color": "Blue", "size": 15, "quantity": 12 },
//     { "box_number": 135, "style_code": "XE100053", "color": "Blue", "size": 16, "quantity": 12 },
//     { "box_number": 19, "style_code": "XE100053", "color": "Gray", "size": 14, "quantity": 9 },
//     { "box_number": 135, "style_code": "XE100053", "color": "Gray", "size": 15, "quantity": 3 },
//     { "box_number": 135, "style_code": "XE100053", "color": "Gray", "size": 16, "quantity": 9 },
//     { "box_number": 19, "style_code": "XE100053", "color": "Khaki", "size": 14, "quantity": 8 },
//     { "box_number": 19, "style_code": "XE100053", "color": "Khaki", "size": 15, "quantity": 9 },
//     { "box_number": 19, "style_code": "XE100053", "color": "Khaki", "size": 16, "quantity": 9 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Gray", "size": 14, "quantity": 2 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Gray", "size": 15, "quantity": 2 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Gray", "size": 16, "quantity": 2 },
//     { "box_number": 18, "style_code": "XE100073", "color": "Light pink", "size": 12, "quantity": 5 },
//     { "box_number": 18, "style_code": "XE100073", "color": "Light pink", "size": 13, "quantity": 9 },
//     { "box_number": 18, "style_code": "XE100073", "color": "Light pink", "size": 14, "quantity": 12 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Light pink", "size": 14, "quantity": 2 },
//     { "box_number": 18, "style_code": "XE100073", "color": "Light pink", "size": 15, "quantity": 15 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Light pink", "size": 15, "quantity": 2 },
//     { "box_number": 18, "style_code": "XE100073", "color": "Light pink", "size": 16, "quantity": 9 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Light pink", "size": 16, "quantity": 4 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Rose Red", "size": 14, "quantity": 1 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Rose Red", "size": 15, "quantity": 1 },
//     { "box_number": 18, "style_code": "XE100073", "color": "Rose Red", "size": 16, "quantity": 4 },
//     { "box_number": 19, "style_code": "XE100073", "color": "Rose Red", "size": 16, "quantity": 3 },
//     { "box_number": 31, "style_code": "XE200221", "color": "light blue", "size": 15, "quantity": 10 },
//     { "box_number": 31, "style_code": "XE200221", "color": "light blue", "size": 16, "quantity": 15 },
//     { "box_number": 67, "style_code": "XE200270", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 8, "style_code": "XE200271", "color": "Blue", "size": 15, "quantity": 5 },
//     { "box_number": 20, "style_code": "XE200271", "color": "Khaki", "size": 15, "quantity": 5 },
//     { "box_number": 16, "style_code": "XE200271", "color": "Khaki", "size": 16, "quantity": 2 },
//     { "box_number": 20, "style_code": "XE200271", "color": "Khaki", "size": 16, "quantity": 12 },
//     { "box_number": 16, "style_code": "XE200271", "color": "Khaki", "size": 17, "quantity": 3 },
//     { "box_number": 20, "style_code": "XE200271", "color": "Khaki", "size": 17, "quantity": 12 },
//     { "box_number": 16, "style_code": "XE200271", "color": "Khaki", "size": 18, "quantity": 3 },
//     { "box_number": 20, "style_code": "XE200271", "color": "Khaki", "size": 18, "quantity": 12 },
//     { "box_number": 20, "style_code": "XE200271", "color": "Khaki", "size": 19, "quantity": 12 },
//     { "box_number": 28, "style_code": "XE200271", "color": "Khaki", "size": 19, "quantity": 1 },
//     { "box_number": 20, "style_code": "XE200271", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 37, "style_code": "XE200271", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 16, "style_code": "XE200271", "color": "Pink", "size": 16, "quantity": 9 },
//     { "box_number": 20, "style_code": "XE200271", "color": "Pink", "size": 16, "quantity": 3 },
//     { "box_number": 16, "style_code": "XE200271", "color": "Pink", "size": 17, "quantity": 6 },
//     { "box_number": 6, "style_code": "XE200271", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 9, "style_code": "XE200271", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 12, "style_code": "XE200271", "color": "Pink", "size": 19, "quantity": 3 },
//     { "box_number": 17, "style_code": "XE200272", "color": "Blue", "size": 15, "quantity": 12 },
//     { "box_number": 28, "style_code": "XE200272", "color": "Blue", "size": 15, "quantity": 6 },
//     { "box_number": 17, "style_code": "XE200272", "color": "Blue", "size": 16, "quantity": 16 },
//     { "box_number": 28, "style_code": "XE200272", "color": "Blue", "size": 16, "quantity": 2 },
//     { "box_number": 16, "style_code": "XE200272", "color": "Blue", "size": 17, "quantity": 3 },
//     { "box_number": 17, "style_code": "XE200272", "color": "Blue", "size": 17, "quantity": 14 },
//     { "box_number": 16, "style_code": "XE200272", "color": "Blue", "size": 18, "quantity": 6 },
//     { "box_number": 17, "style_code": "XE200272", "color": "Blue", "size": 18, "quantity": 3 },
//     { "box_number": 28, "style_code": "XE200272", "color": "Blue", "size": 18, "quantity": 3 },
//     { "box_number": 17, "style_code": "XE200272", "color": "Blue", "size": 19, "quantity": 6 },
//     { "box_number": 28, "style_code": "XE200272", "color": "Blue", "size": 19, "quantity": 6 },
//     { "box_number": 28, "style_code": "XE200277", "color": "Blue", "size": 15, "quantity": 2 },
//     { "box_number": 28, "style_code": "XE200277", "color": "Blue", "size": 16, "quantity": 1 },
//     { "box_number": 28, "style_code": "XE200277", "color": "Blue", "size": 18, "quantity": 1 },
//     { "box_number": 67, "style_code": "XE200277", "color": "Blue", "size": 18, "quantity": 1 },
//     { "box_number": 28, "style_code": "XE200277", "color": "Blue", "size": 19, "quantity": 1 },
//     { "box_number": 28, "style_code": "XE200277", "color": "Green", "size": 17, "quantity": 2 },
//     { "box_number": 28, "style_code": "XE200277", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 67, "style_code": "XE200277", "color": "Pink", "size": 18, "quantity": 2 },
//     { "box_number": 67, "style_code": "XE200277", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 67, "style_code": "XT0RL15061", "color": "Black", "size": 12, "quantity": 8 },
//     { "box_number": 109, "style_code": "XT0RL15061", "color": "Black", "size": 12, "quantity": 13 },
//     { "box_number": 87, "style_code": "XT0RL15061", "color": "Meat powder", "size": 11, "quantity": 53 },
//     { "box_number": 109, "style_code": "XT0RL15061", "color": "Meat powder", "size": 12, "quantity": 39 },
//     { "box_number": 109, "style_code": "XT0RL15061", "color": "Sapphire", "size": 10, "quantity": 15 },
//     { "box_number": 152, "style_code": "Y0731", "color": "Pink", "size": 12, "quantity": 31 },
//     { "box_number": 109, "style_code": "Y0731", "color": "Pink", "size": 13, "quantity": 12 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 13, "quantity": 15 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 13, "quantity": 8 },
//     { "box_number": 120, "style_code": "Y0731", "color": "Pink", "size": 13, "quantity": 20 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 13, "quantity": 10 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 13, "quantity": 10 },
//     { "box_number": 116, "style_code": "Y0731", "color": "Pink", "size": 14, "quantity": 15 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 14, "quantity": 15 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 14, "quantity": 7 },
//     { "box_number": 120, "style_code": "Y0731", "color": "Pink", "size": 14, "quantity": 6 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 14, "quantity": 8 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 14, "quantity": 10 },
//     { "box_number": 116, "style_code": "Y0731", "color": "Pink", "size": 15, "quantity": 14 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 15, "quantity": 10 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 15, "quantity": 10 },
//     { "box_number": 120, "style_code": "Y0731", "color": "Pink", "size": 15, "quantity": 13 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 15, "quantity": 10 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 15, "quantity": 10 },
//     { "box_number": 152, "style_code": "Y0731", "color": "Pink", "size": 15, "quantity": 13 },
//     { "box_number": 116, "style_code": "Y0731", "color": "Pink", "size": 16, "quantity": 10 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 16, "quantity": 6 },
//     { "box_number": 118, "style_code": "Y0731", "color": "Pink", "size": 16, "quantity": 10 },
//     { "box_number": 120, "style_code": "Y0731", "color": "Pink", "size": 16, "quantity": 12 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 16, "quantity": 23 },
//     { "box_number": 121, "style_code": "Y0731", "color": "Pink", "size": 16, "quantity": 2 },
//     { "box_number": 161, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 2 },
//     { "box_number": 161, "style_code": "X0DL2011", "color": "Sauce red", "size": "", "quantity": 2 },
//     { "box_number": 161, "style_code": "X0DL2011", "color": "Sauce red", "size": "", "quantity": 4 },
//     { "box_number": 161, "style_code": "X0DL2011", "color": "Sauce red", "size": "", "quantity": 10 },
//     { "box_number": 161, "style_code": "X0DL2015", "color": "Gray", "size": 11, "quantity": 2 },
//     { "box_number": 161, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 2 },
//     { "box_number": 161, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 4 },
//     { "box_number": 161, "style_code": "X0DL2015", "color": "Butter green", "size": 15, "quantity": 2 },
//     { "box_number": 161, "style_code": "X2RL1327", "color": "Rose Red", "size": 13, "quantity": 6 },
//     { "box_number": 161, "style_code": "X2RL1327", "color": "Rose Red", "size": 14, "quantity": 5 },
//     { "box_number": 161, "style_code": "X2RL1327", "color": "Rose Red", "size": 15, "quantity": 7 },
//     { "box_number": 161, "style_code": "X2RL1327", "color": "Meat powder", "size": 12, "quantity": 3 },
//     { "box_number": 162, "style_code": "B1BA5023", "color": "Lotus root starch", "size": 12, "quantity": 2 },
//     { "box_number": 162, "style_code": "B1BA5023", "color": "Lotus root starch", "size": 14, "quantity": 42 },
//     { "box_number": 162, "style_code": "X2DA1029", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 162, "style_code": "X2DA1029", "color": "dark gray", "size": 13, "quantity": 17 },
//     { "box_number": 163, "style_code": "X0DQX2522", "color": "Black", "size": 16, "quantity": 5 },
//     { "box_number": 163, "style_code": "X0DQX2522", "color": "Black", "size": 17, "quantity": 4 },
//     { "box_number": 163, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 163, "style_code": "X1RL1325M", "color": "Dark gray", "size": 16, "quantity": 5 },
//     { "box_number": 163, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 1 },
//     { "box_number": 163, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 2 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Big Red", "size": 21, "quantity": 1 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Big Red", "size": 22, "quantity": 1 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Big Red", "size": 23, "quantity": 1 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Pink", "size": 17, "quantity": 6 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Pink", "size": 18, "quantity": 6 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Pink", "size": 20, "quantity": 1 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Pink", "size": 22, "quantity": 1 },
//     { "box_number": 163, "style_code": "X2DL2033", "color": "Purple", "size": 19, "quantity": 1 },
//     { "box_number": 163, "style_code": "X2DL2058", "color": "Pink", "size": 16, "quantity": 2 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Royal Blue", "size": 12, "quantity": 5 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Royal Blue", "size": 15, "quantity": 3 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Royal Blue", "size": 16, "quantity": 3 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Dahon", "size": 13, "quantity": 5 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Dahon", "size": 14, "quantity": 5 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Dahon", "size": 15, "quantity": 8 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Dahon", "size": 16, "quantity": 2 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 12, "quantity": 1 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 14, "quantity": 1 },
//     { "box_number": 164, "style_code": "X1RL1326S", "color": "", "size": "", "quantity": 1 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 12, "quantity": 3 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 18, "quantity": 1 },
//     { "box_number": 164, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 17, "quantity": 1 },
//     { "box_number": 164, "style_code": "XE100039", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 164, "style_code": "XE100039", "color": "Blue", "size": 12, "quantity": 1 },
//     { "box_number": 164, "style_code": "XE100039", "color": "Blue", "size": 13, "quantity": 2 },
//     { "box_number": 164, "style_code": "XE100039", "color": "Blue", "size": 15, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106018", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106018", "color": "Gray", "size": 12, "quantity": 6 },
//     { "box_number": 165, "style_code": "HE106018", "color": "Gray", "size": 13, "quantity": 15 },
//     { "box_number": 165, "style_code": "HE106018", "color": "Gray", "size": 14, "quantity": 12 },
//     { "box_number": 165, "style_code": "HE106018", "color": "Gray", "size": 15, "quantity": 6 },
//     { "box_number": 165, "style_code": "HE106026", "color": "Blue", "size": 12, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106026", "color": "Blue", "size": 13, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106026", "color": "Blue", "size": 14, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106026", "color": "Blue", "size": 15, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106026", "color": "Blue", "size": 16, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106030", "color": "Bean paste color", "size": 12, "quantity": 1 },
//     { "box_number": 165, "style_code": "HE106030", "color": "dark blue", "size": 11, "quantity": 3 },
//     { "box_number": 165, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 3 },
//     { "box_number": 165, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 1 },
//     { "box_number": 166, "style_code": "HE106018", "color": "Pink", "size": 12, "quantity": 9 },
//     { "box_number": 166, "style_code": "HE106018", "color": "Pink", "size": 13, "quantity": 16 },
//     { "box_number": 166, "style_code": "HE106018", "color": "Pink", "size": 14, "quantity": 13 },
//     { "box_number": 166, "style_code": "HE106018", "color": "Pink", "size": 15, "quantity": 21 },
//     { "box_number": 166, "style_code": "HE106018", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 166, "style_code": "HE106026", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 166, "style_code": "HE106026", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 166, "style_code": "HE106026", "color": "Blue", "size": 12, "quantity": 2 },
//     { "box_number": 166, "style_code": "HE106026", "color": "Blue", "size": 13, "quantity": 8 },
//     { "box_number": 166, "style_code": "HE106026", "color": "Blue", "size": 14, "quantity": 6 },
//     { "box_number": 166, "style_code": "HE106026", "color": "Blue", "size": 15, "quantity": 6 },
//     { "box_number": 166, "style_code": "HE106026", "color": "Blue", "size": 16, "quantity": 6 },
//     { "box_number": 167, "style_code": "H2DA0026", "color": "pink orange", "size": 12, "quantity": 1 },
//     { "box_number": 167, "style_code": "H2DA0026", "color": "Pink", "size": 11, "quantity": 12 },
//     { "box_number": 167, "style_code": "H2DA0026", "color": "Pink", "size": 12, "quantity": 32 },
//     { "box_number": 167, "style_code": "H2DA0026", "color": "Pink", "size": 13, "quantity": 26 },
//     { "box_number": 167, "style_code": "H2DA0026", "color": "light green", "size": 13, "quantity": 1 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 3 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "yellow", "size": "", "quantity": 5 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "Sauce red", "size": "", "quantity": 6 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "Sauce red", "size": "", "quantity": 6 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "Sauce red", "size": "", "quantity": 6 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "Sauce red", "size": "", "quantity": 2 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 15 },
//     { "box_number": 168, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 7 },
//     { "box_number": 169, "style_code": "H1DA0023", "color": "light gray", "size": 12, "quantity": 9 },
//     { "box_number": 169, "style_code": "H1DA0023", "color": "light gray", "size": 13, "quantity": 17 },
//     { "box_number": 169, "style_code": "H1DA0023", "color": "light gray", "size": 14, "quantity": 5 },
//     { "box_number": 169, "style_code": "X0DD2500", "color": "Navy blue/red", "size": 12, "quantity": 20 },
//     { "box_number": 169, "style_code": "X0DQX2500", "color": "Bean Paste Purple", "size": 15, "quantity": 2 },
//     { "box_number": 169, "style_code": "X0DQX2500", "color": "Navy blue", "size": 12, "quantity": 1 },
//     { "box_number": 169, "style_code": "X0DQX2500", "color": "Navy blue red", "size": 16, "quantity": 1 },
//     { "box_number": 170, "style_code": "X0DQX2521", "color": "Pink", "size": 15, "quantity": 24 },
//     { "box_number": 170, "style_code": "X0DQX2521", "color": "Pink", "size": 16, "quantity": 24 },
//     { "box_number": 170, "style_code": "X0DQX2521", "color": "Golden", "size": 13, "quantity": 21 },
//     { "box_number": 171, "style_code": "X2RL1321", "color": "Pink", "size": 12, "quantity": 8 },
//     { "box_number": 171, "style_code": "X2RL1321", "color": "Light gray", "size": 12, "quantity": 4 },
//     { "box_number": 171, "style_code": "X2RL1321", "color": "Light gray", "size": 13, "quantity": 27 },
//     { "box_number": 171, "style_code": "X2RL1321", "color": "Light gray", "size": 14, "quantity": 1 },
//     { "box_number": 171, "style_code": "XT0RL15061", "color": "Sapphire", "size": 10, "quantity": 6 },
//     { "box_number": 171, "style_code": "XT0RL15061", "color": "Meat powder", "size": 11, "quantity": 5 },
//     { "box_number": 171, "style_code": "XT0RL15061", "color": "Meat powder", "size": 12, "quantity": 12 },
//     { "box_number": 172, "style_code": "H1RQ0563", "color": "Navy blue", "size": 15, "quantity": 1 },
//     { "box_number": 172, "style_code": "X0RQ1718", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 172, "style_code": "X0RQ2028", "color": "silver gray", "size": 15, "quantity": 2 },
//     { "box_number": 172, "style_code": "X1RL1325M", "color": "White", "size": 16, "quantity": 1 },
//     { "box_number": 172, "style_code": "X1RL1325M", "color": "White", "size": 17, "quantity": 1 },
//     { "box_number": 172, "style_code": "X1RL1325M", "color": "White", "size": 20, "quantity": 2 },
//     { "box_number": 172, "style_code": "X1RL1325M", "color": "Black", "size": 19, "quantity": 5 },
//     { "box_number": 172, "style_code": "X1RL1325", "color": "dark gray", "size": 20, "quantity": 1 },
//     { "box_number": 172, "style_code": "X2DL2058", "color": "Apricot", "size": 16, "quantity": 1 },
//     { "box_number": 172, "style_code": "XE100053", "color": "Blue", "size": 12, "quantity": 6 },
//     { "box_number": 172, "style_code": "XE100053", "color": "Blue", "size": 13, "quantity": 7 },
//     { "box_number": 172, "style_code": "XE100053", "color": "Blue", "size": 15, "quantity": 1 },
//     { "box_number": 172, "style_code": "XE100053", "color": "Blue", "size": 16, "quantity": 2 },
//     { "box_number": 172, "style_code": "XE200271", "color": "Blue", "size": 18, "quantity": 3 },
//     { "box_number": 172, "style_code": "XE200271", "color": "Blue", "size": 19, "quantity": 13 },
//     { "box_number": 173, "style_code": "H0DA0163", "color": "Black", "size": 15, "quantity": 1 },
//     { "box_number": 173, "style_code": "H0DA0163", "color": "Gray", "size": 14, "quantity": 3 },
//     { "box_number": 173, "style_code": "H0DA0163", "color": "Gray", "size": 15, "quantity": 1 },
//     { "box_number": 173, "style_code": "H0DA0166", "color": "White", "size": 16, "quantity": 1 },
//     { "box_number": 173, "style_code": "H0DA0166", "color": "Fluorescent green", "size": 14, "quantity": 1 },
//     { "box_number": 173, "style_code": "X1RL1325", "color": "White", "size": 17, "quantity": 2 },
//     { "box_number": 173, "style_code": "X1RL1325", "color": "White", "size": 19, "quantity": 6 },
//     { "box_number": 173, "style_code": "X1RL1325", "color": "Black", "size": 15, "quantity": 5 },
//     { "box_number": 173, "style_code": "X1RL1325", "color": "Black", "size": 17, "quantity": 3 },
//     { "box_number": 173, "style_code": "X1RL1325M", "color": "White", "size": 20, "quantity": 6 },
//     { "box_number": 173, "style_code": "XE200270", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200270", "color": "Blue", "size": 15, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200270", "color": "Purple", "size": 19, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200271", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200271", "color": "Khaki", "size": 15, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200271", "color": "Blue", "size": 16, "quantity": 3 },
//     { "box_number": 173, "style_code": "XE200272", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200272", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200272", "color": "Blue", "size": 19, "quantity": 1 },
//     { "box_number": 173, "style_code": "XE200272", "color": "Green", "size": 15, "quantity": 1 },
//     { "box_number": 174, "style_code": "H0DA0111", "color": "Black", "size": 15, "quantity": 1 },
//     { "box_number": 174, "style_code": "H0DA0163", "color": "Gray", "size": 15, "quantity": 1 },
//     { "box_number": 174, "style_code": "H1DA0023", "color": "Green", "size": 14, "quantity": 1 },
//     { "box_number": 174, "style_code": "H1DA0023", "color": "light gray", "size": 13, "quantity": 1 },
//     { "box_number": 174, "style_code": "H1RA0069", "color": "Black", "size": 12, "quantity": 2 },
//     { "box_number": 174, "style_code": "H1RA0069", "color": "Black", "size": 13, "quantity": 1 },
//     { "box_number": 174, "style_code": "H1RA0069", "color": "Black", "size": 14, "quantity": 2 },
//     { "box_number": 174, "style_code": "H1RA0069", "color": "Black", "size": 15, "quantity": 3 },
//     { "box_number": 174, "style_code": "H1RA0150", "color": "White", "size": 14, "quantity": 1 },
//     { "box_number": 174, "style_code": "H1RQ0563", "color": "Navy blue", "size": 12, "quantity": 1 },
//     { "box_number": 174, "style_code": "H1RQ0563", "color": "Navy blue", "size": 13, "quantity": 1 },
//     { "box_number": 174, "style_code": "H1RQ0563", "color": "Navy blue", "size": 14, "quantity": 1 },
//     { "box_number": 174, "style_code": "H2RL0206", "color": "Meat powder", "size": 16, "quantity": 3 },
//     { "box_number": 174, "style_code": "W0RQ8027", "color": "Blue", "size": 12, "quantity": 2 },
//     { "box_number": 174, "style_code": "X1DA1057", "color": "light blue", "size": 12, "quantity": 1 },
//     { "box_number": 174, "style_code": "X1RQ1638", "color": "dark gray", "size": 10, "quantity": 1 },
//     { "box_number": 174, "style_code": "X2DL2013", "color": "Golden", "size": 13, "quantity": 3 },
//     { "box_number": 174, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 2 },
//     { "box_number": 174, "style_code": "X2DL2033", "color": "Big Red", "size": 16, "quantity": 1 },
//     { "box_number": 174, "style_code": "X2DL2033", "color": "Big Red", "size": 20, "quantity": 2 },
//     { "box_number": 174, "style_code": "X2DL2033", "color": "Pink", "size": 15, "quantity": 3 },
//     { "box_number": 174, "style_code": "X2DL2033", "color": "Purple", "size": 16, "quantity": 2 },
//     { "box_number": 174, "style_code": "X2DL2033", "color": "Purple", "size": 22, "quantity": 1 },
//     { "box_number": 174, "style_code": "X2DL2033", "color": "Purple", "size": 23, "quantity": 1 },
//     { "box_number": 174, "style_code": "X2DL2058", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 174, "style_code": "X2DL2058", "color": "Pink", "size": 14, "quantity": 2 },
//     { "box_number": 174, "style_code": "X2DL2058", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 174, "style_code": "X2DL2058", "color": "Pink", "size": 15, "quantity": 3 },
//     { "box_number": 174, "style_code": "X2DL2058", "color": "Taro powder", "size": 12, "quantity": 2 },
//     { "box_number": 174, "style_code": "X2DL2058", "color": "Taro powder", "size": 13, "quantity": 1 },
//     { "box_number": 174, "style_code": "XE100053", "color": "Blue", "size": 12, "quantity": 1 },
//     { "box_number": 175, "style_code": "X2RL1321", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 175, "style_code": "X2RL1321", "color": "Light gray", "size": 12, "quantity": 12 },
//     { "box_number": 175, "style_code": "X2RL1321", "color": "Light gray", "size": 13, "quantity": 16 },
//     { "box_number": 175, "style_code": "X2RL1321", "color": "Light gray", "size": 14, "quantity": 10 },
//     { "box_number": 175, "style_code": "X2RL1321", "color": "Light green", "size": 11, "quantity": 6 },
//     { "box_number": 175, "style_code": "X2RL1327M", "color": "Black", "size": 16, "quantity": 3 },
//     { "box_number": 175, "style_code": "X2RL1327M", "color": "Black", "size": 17, "quantity": 2 },
//     { "box_number": 175, "style_code": "X2RL1327M", "color": "Black", "size": 18, "quantity": 8 },
//     { "box_number": 175, "style_code": "X2RL1327M", "color": "Black", "size": 19, "quantity": 4 },
//     { "box_number": 176, "style_code": "X2DL2012", "color": "Green bean paste", "size": 12, "quantity": 5 },
//     { "box_number": 176, "style_code": "X2DL2012", "color": "Green bean paste", "size": 13, "quantity": 7 },
//     { "box_number": 176, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 3 },
//     { "box_number": 176, "style_code": "X2DL2012", "color": "Green bean paste", "size": 15, "quantity": 4 },
//     { "box_number": 176, "style_code": "X2DL2012", "color": "Yellow", "size": 13, "quantity": 1 },
//     { "box_number": 176, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 176, "style_code": "X2DL2012", "color": "Yellow", "size": 15, "quantity": 6 },
//     { "box_number": 176, "style_code": "X2RL1327M", "color": "Black", "size": 16, "quantity": 6 },
//     { "box_number": 176, "style_code": "X2RL1327M", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 176, "style_code": "X2RL1327M", "color": "Meat powder", "size": 16, "quantity": 4 },
//     { "box_number": 176, "style_code": "X2RL1327M", "color": "Meat powder", "size": 17, "quantity": 7 },
//     { "box_number": 176, "style_code": "X2RL1327M", "color": "Meat powder", "size": 18, "quantity": 2 },
//     { "box_number": 177, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 4 },
//     { "box_number": 177, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 1 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Pink", "size": 15, "quantity": 12 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Yellow", "size": 12, "quantity": 7 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Yellow", "size": 13, "quantity": 11 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Yellow", "size": 14, "quantity": 8 },
//     { "box_number": 177, "style_code": "X2DL2011", "color": "Sauce red", "size": 15, "quantity": 5 },
//     { "box_number": 178, "style_code": "X2DL2011", "color": "Pink", "size": 12, "quantity": 6 },
//     { "box_number": 178, "style_code": "X2DL2011", "color": "Pink", "size": 13, "quantity": 26 },
//     { "box_number": 178, "style_code": "X2DL2011", "color": "Yellow", "size": 12, "quantity": 4 },
//     { "box_number": 178, "style_code": "X2DL2011", "color": "Yellow", "size": 13, "quantity": 5 },
//     { "box_number": 178, "style_code": "X2DL2011", "color": "Sauce red", "size": 15, "quantity": 10 },
//     { "box_number": 179, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 1 },
//     { "box_number": 179, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 5 },
//     { "box_number": 179, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 3 },
//     { "box_number": 179, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 1 },
//     { "box_number": 179, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 1 },
//     { "box_number": 179, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 2 },
//     { "box_number": 179, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 3 },
//     { "box_number": 179, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 179, "style_code": "X2DL2011", "color": "Pink", "size": 12, "quantity": 2 },
//     { "box_number": 179, "style_code": "X2DL2011", "color": "Pink", "size": 13, "quantity": 10 },
//     { "box_number": 179, "style_code": "X2DL2011", "color": "Yellow", "size": 12, "quantity": 11 },
//     { "box_number": 179, "style_code": "X2DL2011", "color": "Yellow", "size": 14, "quantity": 6 },
//     { "box_number": 179, "style_code": "X2DL2011", "color": "Sauce red", "size": 15, "quantity": 5 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Green bean paste", "size": 11, "quantity": 2 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 6 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 11 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 7 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 2 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 1 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Dark pink", "size": 12, "quantity": 4 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 10 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 6 },
//     { "box_number": 180, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 2 },
//     { "box_number": 181, "style_code": "X1DA1057", "color": "Gray", "size": 11, "quantity": 1 },
//     { "box_number": 181, "style_code": "X1DA1057", "color": "Navy blue", "size": 13, "quantity": 8 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "golden", "size": 12, "quantity": 6 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "Golden", "size": 13, "quantity": 2 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "Golden", "size": 15, "quantity": 2 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 5 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 10 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "Silver", "size": 12, "quantity": 5 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 11 },
//     { "box_number": 181, "style_code": "X2DL2013", "color": "Silver", "size": 15, "quantity": 4 },
//     { "box_number": 182, "style_code": "H0DA0111", "color": "Black", "size": 15, "quantity": 1 },
//     { "box_number": 182, "style_code": "H0DA0163", "color": "Gray", "size": 12, "quantity": 2 },
//     { "box_number": 182, "style_code": "H1DA0023", "color": "Green", "size": 11, "quantity": 2 },
//     { "box_number": 182, "style_code": "H1DA0023", "color": "Green", "size": 13, "quantity": 2 },
//     { "box_number": 182, "style_code": "H1DA0023", "color": "light gray", "size": 12, "quantity": 1 },
//     { "box_number": 182, "style_code": "H1DA0023", "color": "light gray", "size": 13, "quantity": 3 },
//     { "box_number": 182, "style_code": "H1DA0023", "color": "light gray", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Big Red", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Gray green", "size": 13, "quantity": 1 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Gray green", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Gray green", "size": 15, "quantity": 4 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Gray green", "size": 16, "quantity": 1 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Navy blue", "size": 13, "quantity": 3 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Navy blue", "size": 15, "quantity": 5 },
//     { "box_number": 182, "style_code": "X0DQX2500", "color": "Navy blue", "size": 16, "quantity": 3 },
//     { "box_number": 182, "style_code": "X1DA1077", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X1DA1077", "color": "light gray", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X1DA1077", "color": "light blue", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X1RL1318", "color": "light blue", "size": 14, "quantity": 1 },
//     { "box_number": 182, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 2 },
//     { "box_number": 182, "style_code": "X1RL1326", "color": "Fluorescent green", "size": 14, "quantity": 3 },
//     { "box_number": 182, "style_code": "X1RL1326S", "color": "", "size": "", "quantity": 1 },
//     { "box_number": 182, "style_code": "X1RL1326S", "color": "", "size": " ", "quantity": 3 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Big Red", "size": 10, "quantity": 1 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Big Red", "size": 11, "quantity": 1 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Big Red", "size": 12, "quantity": 1 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Big Red", "size": 13, "quantity": 1 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Pink", "size": 10, "quantity": 1 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 182, "style_code": "X2RQ1652", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 183, "style_code": "X1RL1267M", "color": "Gray", "size": 17, "quantity": 1 },
//     { "box_number": 183, "style_code": "XE100073", "color": "Gray", "size": 14, "quantity": 6 },
//     { "box_number": 183, "style_code": "XE100073", "color": "Gray", "size": 15, "quantity": 12 },
//     { "box_number": 183, "style_code": "XE100073", "color": "Rose Red", "size": 15, "quantity": 1 },
//     { "box_number": 183, "style_code": "XE200271", "color": "Pink", "size": 17, "quantity": 5 },
//     { "box_number": 183, "style_code": "XE200271", "color": "Pink", "size": 18, "quantity": 11 },
//     { "box_number": 183, "style_code": "XE200271", "color": "Pink", "size": 19, "quantity": 13 },
//     { "box_number": 184, "style_code": "H2DA0026", "color": "pink orange", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "H2DA0026", "color": "light green", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "HE106018", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 184, "style_code": "HE106018", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 184, "style_code": "HE106018", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "HE106018", "color": "Pink", "size": 15, "quantity": 2 },
//     { "box_number": 184, "style_code": "HE106030", "color": "Bean paste color", "size": 12, "quantity": 1 },
//     { "box_number": 184, "style_code": "HE106030", "color": "Bean paste color", "size": 13, "quantity": 2 },
//     { "box_number": 184, "style_code": "HE106030", "color": "Bean paste color", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 1 },
//     { "box_number": 184, "style_code": "HE106030", "color": "Dark blue", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2031", "color": "Navy blue", "size": 16, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2080", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2080", "color": "Big Red", "size": 15, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2080", "color": "light blue", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2080", "color": "Navy/Red", "size": 12, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2082", "color": "Pink", "size": 21, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2082", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2082", "color": "Black", "size": 22, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2085", "color": "Pink", "size": 18, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0DL2085", "color": "Navy blue", "size": 21, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0RL1280", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0RL1280", "color": "Pink", "size": 18, "quantity": 2 },
//     { "box_number": 184, "style_code": "X0RL1337", "color": "Black", "size": 15, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0RL1386", "color": "Black", "size": 23, "quantity": 1 },
//     { "box_number": 184, "style_code": "X0RL1386", "color": "Meat powder", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "X2BQ1686", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 184, "style_code": "X2DL2010", "color": "Dark pink", "size": 13, "quantity": 4 },
//     { "box_number": 184, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 2 },
//     { "box_number": 184, "style_code": "X2RL1327", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "X2RL1327", "color": "Rose Red", "size": 14, "quantity": 2 },
//     { "box_number": 184, "style_code": "X2RL1327S", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 184, "style_code": "X2RL1328", "color": "Pink", "size": 20, "quantity": 1 },
//     { "box_number": 184, "style_code": "X2RL1328", "color": "Black", "size": 20, "quantity": 1 },
//     { "box_number": 184, "style_code": "XE200263", "color": "Pink", "size": 18, "quantity": 1 },
//     { "box_number": 184, "style_code": "XT0RL15061", "color": "Sapphire", "size": 10, "quantity": 2 },
//     { "box_number": 184, "style_code": "XT0RL15061", "color": "Sapphire", "size": 11, "quantity": 1 },
//     { "box_number": 184, "style_code": "XT0RL15061", "color": "Black", "size": 12, "quantity": 2 },
//     { "box_number": 185, "style_code": "H2RA0097", "color": "Apricot", "size": 12, "quantity": 9 },
//     { "box_number": 185, "style_code": "X0DL2011", "color": "pink", "size": "", "quantity": 3 },
//     { "box_number": 185, "style_code": "X0DL2037", "color": "Black", "size": 18, "quantity": 5 },
//     { "box_number": 185, "style_code": "X0DL2037", "color": "dark gray", "size": 20, "quantity": 1 },
//     { "box_number": 185, "style_code": "X0DL2037", "color": "dark gray", "size": 23, "quantity": 6 },
//     { "box_number": 185, "style_code": "X1DL2017", "color": "Bean paste color", "size": 13, "quantity": 15 },
//     { "box_number": 185, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 5 },
//     { "box_number": 185, "style_code": "XT0RL15061", "color": "Sapphire", "size": 10, "quantity": 11 },
//     { "box_number": 186, "style_code": "H1DA0030", "color": "Blue", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "H2DA0031", "color": "Dark green", "size": 10, "quantity": 1 },
//     { "box_number": 186, "style_code": "H2DA0031", "color": "Dark green", "size": 12, "quantity": 1 },
//     { "box_number": 186, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 10, "quantity": 2 },
//     { "box_number": 186, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 11, "quantity": 1 },
//     { "box_number": 186, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 12, "quantity": 2 },
//     { "box_number": 186, "style_code": "X1DL2025", "color": "Gray Blue", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2025", "color": "Gray blue green", "size": 12, "quantity": 7 },
//     { "box_number": 186, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 3 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Gray blue", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Gray Blue", "size": 14, "quantity": 6 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Almond tea", "size": 11, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Almond tea", "size": 12, "quantity": 5 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Almond tea", "size": 13, "quantity": 10 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Almond tea", "size": 14, "quantity": 8 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 12, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DA1030", "color": "Pink", "size": 11, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DA1030", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DA1030", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DA1030", "color": "light green", "size": 11, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DA1030", "color": "light green", "size": 12, "quantity": 2 },
//     { "box_number": 186, "style_code": "X2DA1030", "color": "light green", "size": 13, "quantity": 3 },
//     { "box_number": 186, "style_code": "X2DL2030", "color": "Gray blue green", "size": 12, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DL2030", "color": "Gray blue green", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DL2030", "color": "Gray blue green", "size": 14, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DL2030", "color": "Cream Brown", "size": 12, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DL2030", "color": "Cream Brown", "size": 13, "quantity": 1 },
//     { "box_number": 186, "style_code": "X2DL2030", "color": "Lotus color", "size": 14, "quantity": 3 },
//     { "box_number": 186, "style_code": "XE200211", "color": "Pink", "size": 15, "quantity": 5 },
//     { "box_number": 186, "style_code": "XE200211", "color": "Pink", "size": 16, "quantity": 3 },
//     { "box_number": 186, "style_code": "XE200211", "color": "Blue", "size": 15, "quantity": 1 },
//     { "box_number": 186, "style_code": "XE200221", "color": "Ma Hui", "size": 15, "quantity": 2 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Pink", "size": 15, "quantity": 7 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Yellow", "size": 12, "quantity": 1 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Yellow", "size": 13, "quantity": 1 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Yellow", "size": 14, "quantity": 9 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Yellow", "size": 15, "quantity": 2 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Blue", "size": 12, "quantity": 2 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Blue", "size": 14, "quantity": 5 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Blue", "size": 15, "quantity": 7 },
//     { "box_number": 187, "style_code": "XE100039", "color": "Blue", "size": 16, "quantity": 14 },
//     { "box_number": 188, "style_code": "H2RA0088", "color": "Navy blue", "size": 12, "quantity": 1 },
//     { "box_number": 188, "style_code": "H2RA0088", "color": "Navy blue", "size": 13, "quantity": 1 },
//     { "box_number": 188, "style_code": "HE106018", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 188, "style_code": "HE106018", "color": "Pink", "size": 15, "quantity": 2 },
//     { "box_number": 188, "style_code": "HE106018", "color": "Gray", "size": 13, "quantity": 1 },
//     { "box_number": 188, "style_code": "HE106026", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 188, "style_code": "HE106026", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 188, "style_code": "HE106026", "color": "Blue", "size": 13, "quantity": 1 },
//     { "box_number": 188, "style_code": "HE106026", "color": "Blue", "size": 16, "quantity": 1 },
//     { "box_number": 188, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2031", "color": "Navy blue", "size": 16, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2032", "color": "White", "size": 23, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2037", "color": "Black", "size": 16, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2037", "color": "Black", "size": 22, "quantity": 2 },
//     { "box_number": 188, "style_code": "X0DL2082", "color": "White", "size": 18, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2082", "color": "Big Red", "size": 18, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2082", "color": "Black", "size": 17, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2082", "color": "White", "size": 21, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2082", "color": "Pink", "size": 21, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2085", "color": "Sapphire", "size": 15, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2085", "color": "Sapphire", "size": 21, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0DL2085", "color": "Pink", "size": 23, "quantity": 3 },
//     { "box_number": 188, "style_code": "X0RA1192", "color": "Dahon", "size": 22, "quantity": 1 },
//     { "box_number": 188, "style_code": "X0RL1385", "color": "light green", "size": 18, "quantity": 1 },
//     { "box_number": 188, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 1 },
//     { "box_number": 188, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 1 },
//     { "box_number": 188, "style_code": "X2DL2012", "color": "Yellow", "size": 12, "quantity": 4 },
//     { "box_number": 188, "style_code": "X2RL1328", "color": "Dahon", "size": 16, "quantity": 1 },
//     { "box_number": 188, "style_code": "X2RL1328", "color": "Dahon", "size": 17, "quantity": 1 },
//     { "box_number": 188, "style_code": "XE200235", "color": "Green", "size": 18, "quantity": 1 },
//     { "box_number": 188, "style_code": "XE200253", "color": "Dark gray brown", "size": 18, "quantity": 2 },
//     { "box_number": 188, "style_code": "XE200253", "color": "Dark gray brown", "size": 19, "quantity": 2 },
//     { "box_number": 188, "style_code": "XE200253", "color": "Green light gray", "size": 15, "quantity": 1 },
//     { "box_number": 188, "style_code": "XT0RL15061", "color": "Meat powder", "size": 10, "quantity": 1 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "White", "size": 23, "quantity": 2 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "Big Red", "size": 16, "quantity": 1 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "Big Red", "size": 18, "quantity": 8 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "Big Red", "size": 19, "quantity": 4 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "Big Red", "size": 21, "quantity": 6 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 3 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "Black", "size": 21, "quantity": 6 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "light gray", "size": 21, "quantity": 3 },
//     { "box_number": 189, "style_code": "X0DL2082", "color": "light gray", "size": 23, "quantity": 1 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Pink", "size": 21, "quantity": 2 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Black", "size": 19, "quantity": 2 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Big Red", "size": 21, "quantity": 4 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Big Red", "size": 22, "quantity": 3 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Pink", "size": 20, "quantity": 22 },
//     { "box_number": 190, "style_code": "X0DL2082", "color": "Black", "size": 21, "quantity": 5 },
//     { "box_number": 191, "style_code": "X0DL2031", "color": "Apricot", "size": 20, "quantity": 2 },
//     { "box_number": 191, "style_code": "X0DL2031", "color": "Apricot", "size": 21, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2031", "color": "Apricot", "size": 22, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2031", "color": "Navy blue", "size": 22, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2031", "color": "Navy blue", "size": 23, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2037", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2037", "color": "Pink", "size": 17, "quantity": 14 },
//     { "box_number": 191, "style_code": "X0DL2037", "color": "Pink", "size": 19, "quantity": 12 },
//     { "box_number": 191, "style_code": "X0DL2037", "color": "Pink", "size": 21, "quantity": 2 },
//     { "box_number": 191, "style_code": "X0DL2082", "color": "White", "size": 20, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2082", "color": "Big Red", "size": 18, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2082", "color": "Big Red", "size": 19, "quantity": 1 },
//     { "box_number": 191, "style_code": "X0DL2082", "color": "Big Red", "size": 20, "quantity": 2 },
//     { "box_number": 191, "style_code": "X0DL2082", "color": "Big Red", "size": 21, "quantity": 4 },
//     { "box_number": 191, "style_code": "X0DL2082", "color": "Big Red", "size": 23, "quantity": 2 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Gray", "size": 11, "quantity": 1 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 3 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Butter green", "size": 13, "quantity": 3 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Butter green", "size": 14, "quantity": 2 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Butter green", "size": 12, "quantity": 1 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Lotus color", "size": 11, "quantity": 3 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Lotus color", "size": 13, "quantity": 2 },
//     { "box_number": 192, "style_code": "X0DL2015", "color": "Lotus color", "size": 15, "quantity": 1 },
//     { "box_number": 192, "style_code": "X0DL2032", "color": "White", "size": 22, "quantity": 6 },
//     { "box_number": 192, "style_code": "X0DL2032", "color": "White", "size": 23, "quantity": 4 },
//     { "box_number": 192, "style_code": "X2DL2011", "color": "Pink", "size": 11, "quantity": 2 },
//     { "box_number": 192, "style_code": "X2DL2011", "color": "Pink", "size": 12, "quantity": 6 },
//     { "box_number": 192, "style_code": "X2DL2011", "color": "Pink", "size": 13, "quantity": 2 },
//     { "box_number": 192, "style_code": "X2DL2011", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 192, "style_code": "X2DL2011", "color": "Yellow", "size": 13, "quantity": 6 },
//     { "box_number": 192, "style_code": "X2DL2011", "color": "Yellow", "size": 14, "quantity": 2 },
//     { "box_number": 192, "style_code": "X2DL2011", "color": "Yellow", "size": 15, "quantity": 1 },
//     { "box_number": 193, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 4 },
//     { "box_number": 193, "style_code": "X1DL2025", "color": "Gray blue", "size": 13, "quantity": 10 },
//     { "box_number": 193, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 5 },
//     { "box_number": 193, "style_code": "X1DL2025", "color": "Gray blue green", "size": 12, "quantity": 1 },
//     { "box_number": 193, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 5 },
//     { "box_number": 193, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 7 },
//     { "box_number": 193, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 3 },
//     { "box_number": 193, "style_code": "X1DL2026", "color": "Gray blue", "size": 13, "quantity": 6 },
//     { "box_number": 193, "style_code": "X1DL2026", "color": "Gray Blue", "size": 14, "quantity": 8 },
//     { "box_number": 193, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 12, "quantity": 9 },
//     { "box_number": 193, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 13, "quantity": 9 },
//     { "box_number": 193, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 14, "quantity": 5 },
//     { "box_number": 194, "style_code": "H1DA0030", "color": "blue", "size": 10, "quantity": 2 },
//     { "box_number": 194, "style_code": "H1DA0030", "color": "Blue", "size": 13, "quantity": 1 },
//     { "box_number": 194, "style_code": "H1DA0030", "color": "forest green", "size": 13, "quantity": 1 },
//     { "box_number": 194, "style_code": "H2DA0031", "color": "Dark green", "size": 10, "quantity": 4 },
//     { "box_number": 194, "style_code": "H2DA0031", "color": "Dark green", "size": 11, "quantity": 1 },
//     { "box_number": 194, "style_code": "H2DA0031", "color": "Dark green", "size": 12, "quantity": 3 },
//     { "box_number": 194, "style_code": "H2DA0031", "color": "Dark green", "size": 13, "quantity": 1 },
//     { "box_number": 194, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 10, "quantity": 4 },
//     { "box_number": 194, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 11, "quantity": 1 },
//     { "box_number": 194, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 12, "quantity": 1 },
//     { "box_number": 194, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 1 },
//     { "box_number": 194, "style_code": "X1DL2025", "color": "Gray blue", "size": 13, "quantity": 3 },
//     { "box_number": 194, "style_code": "X1DL2025", "color": "Gray Blue", "size": 14, "quantity": 6 },
//     { "box_number": 194, "style_code": "X1DL2025", "color": "Gray blue green", "size": 11, "quantity": 1 },
//     { "box_number": 194, "style_code": "X1DL2025", "color": "Gray blue green", "size": 12, "quantity": 6 },
//     { "box_number": 194, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 8 },
//     { "box_number": 194, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 9 },
//     { "box_number": 194, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 3 },
//     { "box_number": 194, "style_code": "X2DA1029", "color": "Pink", "size": 12, "quantity": 1 },
//     { "box_number": 194, "style_code": "X2DA1030", "color": "Pink", "size": 12, "quantity": 5 },
//     { "box_number": 194, "style_code": "X2DA1030", "color": "Pink", "size": 13, "quantity": 7 },
//     { "box_number": 194, "style_code": "X2DA1030", "color": "light green", "size": 12, "quantity": 1 },
//     { "box_number": 194, "style_code": "X2DA1030", "color": "light green", "size": 13, "quantity": 1 },
//     { "box_number": 194, "style_code": "X2DL2028", "color": "Medium Yellow", "size": 13, "quantity": 1 },
//     { "box_number": 195, "style_code": "B1BA5023", "color": "Lotus root starch", "size": 12, "quantity": 51 },
//     { "box_number": 195, "style_code": "B1BA5023", "color": "Lotus root starch", "size": 14, "quantity": 3 },
//     { "box_number": 195, "style_code": "H2DA0031", "color": "Dark green", "size": 11, "quantity": 6 },
//     { "box_number": 195, "style_code": "H2DA0031", "color": "Lotus root starch", "size": 10, "quantity": 1 },
//     { "box_number": 196, "style_code": "B1BA5023", "color": "Blue", "size": 13, "quantity": 69 },
//     { "box_number": 196, "style_code": "B1BA5023", "color": "Lotus root starch", "size": 14, "quantity": 1 },
//     { "box_number": 197, "style_code": "B0RL5053", "color": "Light pink", "size": 15, "quantity": 1 },
//     { "box_number": 197, "style_code": "B0RL5053", "color": "Navy blue", "size": 16, "quantity": 8 },
//     { "box_number": 197, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 15, "quantity": 2 },
//     { "box_number": 197, "style_code": "X0DD2500", "color": "Bean Paste Purple", "size": 16, "quantity": 22 },
//     { "box_number": 197, "style_code": "X0DD2500", "color": "Pink", "size": 13, "quantity": 15 },
//     { "box_number": 197, "style_code": "X0DD2500", "color": "Pink", "size": 14, "quantity": 2 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Big Red", "size": 14, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Gray green", "size": 14, "quantity": 4 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Bean Paste Purple", "size": 13, "quantity": 2 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Bean Paste Purple", "size": 14, "quantity": 3 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Bean Paste Purple", "size": 16, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Pink", "size": 14, "quantity": 2 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Gray green", "size": 15, "quantity": 2 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Navy blue red", "size": 15, "quantity": 3 },
//     { "box_number": 197, "style_code": "X0DQX2500", "color": "Navy blue red", "size": 16, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2521", "color": "golden", "size": 12, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2522", "color": "Black", "size": 15, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2522", "color": "Black", "size": 18, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2522", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 197, "style_code": "X0DQX2522", "color": "black", "size": 20, "quantity": 3 },
//     { "box_number": 197, "style_code": "X2DL2057", "color": "Apricot", "size": 15, "quantity": 4 },
//     { "box_number": 198, "style_code": "X1RL1325", "color": "Black", "size": 12, "quantity": 2 },
//     { "box_number": 198, "style_code": "X1RL1325", "color": "Black", "size": 16, "quantity": 3 },
//     { "box_number": 198, "style_code": "X1RL1325M", "color": "Dark gray", "size": 16, "quantity": 5 },
//     { "box_number": 198, "style_code": "X1RL1325M", "color": "Dark gray", "size": 18, "quantity": 8 },
//     { "box_number": 198, "style_code": "X1RL1325M", "color": "Dark gray", "size": 20, "quantity": 4 },
//     { "box_number": 198, "style_code": "X1RL1325S", "color": "White", "size": 14, "quantity": 2 },
//     { "box_number": 198, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 5 },
//     { "box_number": 198, "style_code": "X1RL1326", "color": "Dahon", "size": 14, "quantity": 14 },
//     { "box_number": 198, "style_code": "X1RL1326", "color": "Dahon", "size": 16, "quantity": 5 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Gray blue", "size": 12, "quantity": 6 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Gray blue", "size": 13, "quantity": 3 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Almond tea", "size": 12, "quantity": 1 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Almond tea", "size": 13, "quantity": 2 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Almond tea", "size": 14, "quantity": 2 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 12, "quantity": 1 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 13, "quantity": 2 },
//     { "box_number": 199, "style_code": "X1DL2026", "color": "Medium Yellow", "size": 14, "quantity": 2 },
//     { "box_number": 199, "style_code": "X2DA1029", "color": "Pink", "size": 12, "quantity": 3 },
//     { "box_number": 199, "style_code": "X2DA1029", "color": "Pink", "size": 13, "quantity": 3 },
//     { "box_number": 199, "style_code": "X2DA1029", "color": "dark gray", "size": 11, "quantity": 1 },
//     { "box_number": 199, "style_code": "X2DA1029", "color": "dark gray", "size": 12, "quantity": 17 },
//     { "box_number": 199, "style_code": "X2DL2028", "color": "Gray blue", "size": 12, "quantity": 11 },
//     { "box_number": 199, "style_code": "X2DL2028", "color": "Gray blue", "size": 13, "quantity": 11 },
//     { "box_number": 199, "style_code": "X2DL2028", "color": "Gray Blue", "size": 14, "quantity": 8 },
//     { "box_number": 199, "style_code": "X2DL2028", "color": "Medium Yellow", "size": 14, "quantity": 1 },
//     { "box_number": 200, "style_code": "X0DL2085", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 200, "style_code": "X1DL2007", "color": "Gray", "size": 13, "quantity": 1 },
//     { "box_number": 200, "style_code": "X1DL2007", "color": "Apricot", "size": 13, "quantity": 1 },
//     { "box_number": 200, "style_code": "X2DL2010", "color": "Green bean paste", "size": 13, "quantity": 2 },
//     { "box_number": 200, "style_code": "X2DL2010", "color": "Green bean paste", "size": 14, "quantity": 7 },
//     { "box_number": 200, "style_code": "X2DL2010", "color": "Green bean paste", "size": 15, "quantity": 5 },
//     { "box_number": 200, "style_code": "X2DL2010", "color": "Dark pink", "size": 15, "quantity": 1 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Green bean paste", "size": 11, "quantity": 1 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Green bean paste", "size": 12, "quantity": 3 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Green bean paste", "size": 13, "quantity": 2 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Green bean paste", "size": 14, "quantity": 6 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Green bean paste", "size": 15, "quantity": 3 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Yellow", "size": 12, "quantity": 1 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Yellow", "size": 13, "quantity": 2 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Yellow", "size": 14, "quantity": 12 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Yellow", "size": 15, "quantity": 2 },
//     { "box_number": 200, "style_code": "X2DL2012", "color": "Shacha red", "size": 12, "quantity": 1 },
//     { "box_number": 201, "style_code": "X0DL2085", "color": "Pink", "size": 22, "quantity": 3 },
//     { "box_number": 201, "style_code": "X0DL2085", "color": "Navy blue", "size": 21, "quantity": 1 },
//     { "box_number": 201, "style_code": "X0RL1280", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 201, "style_code": "X0RL1280", "color": "Black", "size": 15, "quantity": 13 },
//     { "box_number": 201, "style_code": "X0RL1280", "color": "Black", "size": 16, "quantity": 6 },
//     { "box_number": 201, "style_code": "X0RL1280", "color": "Black", "size": 17, "quantity": 7 },
//     { "box_number": 201, "style_code": "X2DL2010", "color": "Green bean paste", "size": 11, "quantity": 4 },
//     { "box_number": 201, "style_code": "X2DL2010", "color": "Green bean paste", "size": 12, "quantity": 2 },
//     { "box_number": 201, "style_code": "X2RL1328", "color": "Black", "size": 16, "quantity": 5 },
//     { "box_number": 201, "style_code": "X2RL1328", "color": "Dahon", "size": 14, "quantity": 4 },
//     { "box_number": 201, "style_code": "X2RL1328", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 201, "style_code": "X2RL1328", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 201, "style_code": "X2RL1328", "color": "Pink", "size": 17, "quantity": 1 },
//     { "box_number": 202, "style_code": "H1DA0030", "color": "forest green", "size": 13, "quantity": 2 },
//     { "box_number": 202, "style_code": "X1DL2025", "color": "Gray blue", "size": 12, "quantity": 7 },
//     { "box_number": 202, "style_code": "X1DL2025", "color": "Gray blue", "size": 13, "quantity": 1 },
//     { "box_number": 202, "style_code": "X1DL2025", "color": "Gray blue green", "size": 12, "quantity": 1 },
//     { "box_number": 202, "style_code": "X1DL2025", "color": "Gray blue green", "size": 13, "quantity": 5 },
//     { "box_number": 202, "style_code": "X1DL2025", "color": "Gray blue green", "size": 14, "quantity": 1 },
//     { "box_number": 202, "style_code": "XE200211", "color": "Pink", "size": 15, "quantity": 5 },
//     { "box_number": 202, "style_code": "XE200211", "color": "Pink", "size": 16, "quantity": 6 },
//     { "box_number": 202, "style_code": "XE200221", "color": "Ma Hui", "size": 15, "quantity": 5 },
//     { "box_number": 202, "style_code": "Y0731", "color": "Pink", "size": 13, "quantity": 5 },
//     { "box_number": 202, "style_code": "Y0731", "color": "Pink", "size": 14, "quantity": 19 },
//     { "box_number": 202, "style_code": "Y0731", "color": "Pink", "size": 16, "quantity": 17 },
//     { "box_number": 203, "style_code": "HE106030", "color": "dark blue", "size": 13, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2031", "color": "Navy blue", "size": 18, "quantity": 3 },
//     { "box_number": 203, "style_code": "X0DL2031", "color": "Navy blue", "size": 19, "quantity": 2 },
//     { "box_number": 203, "style_code": "X0DL2031", "color": "Navy blue", "size": 21, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2031", "color": "Navy blue", "size": 23, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2080", "color": "Big Red", "size": 13, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2080", "color": "Big Red", "size": 14, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2080", "color": "Pink", "size": 15, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2080", "color": "light blue", "size": 14, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2080", "color": "light blue", "size": 15, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2080", "color": "Navy blue", "size": 15, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2082", "color": "White", "size": 18, "quantity": 1 },
//     { "box_number": 203, "style_code": "X0DL2082", "color": "White", "size": 20, "quantity": 2 },
//     { "box_number": 203, "style_code": "X0DL2082", "color": "Big Red", "size": 20, "quantity": 1 },
//     { "box_number": 203, "style_code": "X1DL2007", "color": "Apricot", "size": 13, "quantity": 10 },
//     { "box_number": 203, "style_code": "X2DL2010", "color": "Dark pink", "size": 14, "quantity": 1 },
//     { "box_number": 203, "style_code": "X2RL1321", "color": "Light gray", "size": 10, "quantity": 1 },
//     { "box_number": 203, "style_code": "X2RL1321", "color": "Light gray", "size": 13, "quantity": 3 },
//     { "box_number": 203, "style_code": "X2RL1321", "color": "Light green", "size": 10, "quantity": 5 },
//     { "box_number": 203, "style_code": "X2RL1327", "color": "Black", "size": 15, "quantity": 3 },
//     { "box_number": 203, "style_code": "X2RL1327M", "color": "Black", "size": 18, "quantity": 6 },
//     { "box_number": 203, "style_code": "X2RL1327M", "color": "Meat powder", "size": 17, "quantity": 1 },
//     { "box_number": 203, "style_code": "X2RL1328", "color": "Dahon", "size": 16, "quantity": 2 },
//     { "box_number": 203, "style_code": "X2RL1328", "color": "Pink", "size": 12, "quantity": 2 },
//     { "box_number": 203, "style_code": "X2RL1328", "color": "Pink", "size": 20, "quantity": 1 },
//     { "box_number": 204, "style_code": "X0DL2037", "color": "Pink", "size": 22, "quantity": 3 },
//     { "box_number": 204, "style_code": "X0DL2037", "color": "Black", "size": 21, "quantity": 1 },
//     { "box_number": 204, "style_code": "X0DL2037", "color": "Black", "size": 23, "quantity": 17 },
//     { "box_number": 204, "style_code": "X0RL1391", "color": "Dahong", "size": 23, "quantity": 1 },
//     { "box_number": 204, "style_code": "X0RL1391", "color": "Gray", "size": 16, "quantity": 1 },
//     { "box_number": 204, "style_code": "X0RL1391", "color": "Gray", "size": 17, "quantity": 1 },
//     { "box_number": 204, "style_code": "X0RL1391", "color": "Gray", "size": 19, "quantity": 1 },
//     { "box_number": 204, "style_code": "X0RL1391", "color": "Gray", "size": 22, "quantity": 1 },
//     { "box_number": 204, "style_code": "X0RL1391", "color": "Light coffee", "size": 17, "quantity": 2 },
//     { "box_number": 204, "style_code": "X1DL2017", "color": "Bean paste color", "size": 11, "quantity": 4 },
//     { "box_number": 204, "style_code": "X1DL2017", "color": "Bean paste color", "size": 14, "quantity": 8 },
//     { "box_number": 204, "style_code": "X1DL2017", "color": "Navy blue", "size": 13, "quantity": 1 },
//     { "box_number": 204, "style_code": "X2RL1321", "color": "Light green", "size": 10, "quantity": 1 },
//     { "box_number": 205, "style_code": "X1RL1325S", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Royal Blue", "size": 13, "quantity": 1 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Royal Blue", "size": 14, "quantity": 10 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Royal Blue", "size": 15, "quantity": 3 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Sapphire", "size": 19, "quantity": 1 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Sapphire", "size": 20, "quantity": 1 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Dahon", "size": 13, "quantity": 2 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Dahon", "size": 15, "quantity": 1 },
//     { "box_number": 205, "style_code": "X1RL1326", "color": "Dahon", "size": 16, "quantity": 2 },
//     { "box_number": 205, "style_code": "X2DL2057", "color": "Pink", "size": 13, "quantity": 1 },
//     { "box_number": 205, "style_code": "X2DL2057", "color": "Pink", "size": 14, "quantity": 1 },
//     { "box_number": 205, "style_code": "X2DL2057", "color": "Yellow", "size": 14, "quantity": 3 },
//     { "box_number": 205, "style_code": "X2DL2057", "color": "Yellow", "size": 15, "quantity": 2 },
//     { "box_number": 205, "style_code": "X2DL2057", "color": "Apricot", "size": 16, "quantity": 2 },
//     { "box_number": 205, "style_code": "X2DL2058", "color": "Pink", "size": 16, "quantity": 3 },
//     { "box_number": 205, "style_code": "X2DL2058", "color": "Apricot", "size": 14, "quantity": 3 },
//     { "box_number": 205, "style_code": "X2DL2058", "color": "Taro powder", "size": 12, "quantity": 1 },
//     { "box_number": 205, "style_code": "X2DL2058", "color": "Taro powder", "size": 13, "quantity": 1 },
//     { "box_number": 205, "style_code": "X2DL2058", "color": "Taro powder", "size": 14, "quantity": 3 },
//     { "box_number": 205, "style_code": "X2DL2058", "color": "Taro powder", "size": 15, "quantity": 3 },
//     { "box_number": 205, "style_code": "X2DL2058", "color": "Apricot", "size": 16, "quantity": 2 },
//     { "box_number": 206, "style_code": "XE200221", "color": "Ma Hui", "size": 14, "quantity": 1 },
//     { "box_number": 206, "style_code": "Y0731", "color": "Pink", "size": 12, "quantity": 49 },
//     { "box_number": 207, "style_code": "X0DL2053", "color": "Pink", "size": 19, "quantity": 1 },
//     { "box_number": 207, "style_code": "X0DL2053", "color": "Apricot", "size": 20, "quantity": 1 },
//     { "box_number": 207, "style_code": "X2DL2011", "color": "Pink", "size": 12, "quantity": 2 },
//     { "box_number": 207, "style_code": "X2DL2011", "color": "Yellow", "size": 13, "quantity": 14 },
//     { "box_number": 207, "style_code": "X2DL2011", "color": "Sauce red", "size": 12, "quantity": 1 },
//     { "box_number": 207, "style_code": "X2DL2011", "color": "Sauce red", "size": 15, "quantity": 14 },
//     { "box_number": 207, "style_code": "X2RL1321", "color": "Light green", "size": 10, "quantity": 10 },
//     { "box_number": 207, "style_code": "X2RL1321", "color": "Light green", "size": 11, "quantity": 1 },
//     { "box_number": 207, "style_code": "X2RL1327M", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 207, "style_code": "X2RL1327M", "color": "Meat powder", "size": 19, "quantity": 2 },
//     { "box_number": 207, "style_code": "X2RL1328", "color": "Pink", "size": 19, "quantity": 2 },
//     { "box_number": 207, "style_code": "X2RL1328", "color": "Black", "size": 12, "quantity": 1 },
//     { "box_number": 207, "style_code": "X2RL1328", "color": "Black", "size": 14, "quantity": 1 },
//     { "box_number": 207, "style_code": "X2RL1328", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 207, "style_code": "X2RL1328", "color": "Black", "size": 20, "quantity": 1 },
//     { "box_number": 208, "style_code": "X2DL2013", "color": "Gold", "size": 11, "quantity": 9 },
//     { "box_number": 208, "style_code": "X2DL2013", "color": "Gold", "size": 12, "quantity": 3 },
//     { "box_number": 208, "style_code": "X2DL2013", "color": "Gold", "size": 13, "quantity": 15 },
//     { "box_number": 208, "style_code": "X2DL2013", "color": "Gold", "size": 14, "quantity": 13 },
//     { "box_number": 208, "style_code": "X2DL2013", "color": "Gold", "size": 15, "quantity": 11 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "Dark gray", "size": 16, "quantity": 1 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "Dark gray", "size": 17, "quantity": 1 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "Dark gray", "size": 18, "quantity": 5 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "Dark gray", "size": 19, "quantity": 5 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "Black", "size": 14, "quantity": 2 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "Black", "size": 19, "quantity": 1 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "White", "size": 18, "quantity": 2 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "White", "size": 19, "quantity": 1 },
//     { "box_number": 209, "style_code": "X1RL1325", "color": "White", "size": 20, "quantity": 1 },
//     { "box_number": 209, "style_code": "X1PQ1029", "color": "Orange", "size": 14, "quantity": 11 },
//     { "box_number": 209, "style_code": "X1PQ1029", "color": "Orange", "size": 16, "quantity": 6 },
//     { "box_number": 209, "style_code": "H1DA0030", "color": "Yellow", "size": 11, "quantity": 2 },
//     { "box_number": 209, "style_code": "H1DA0030", "color": "Yellow", "size": 13, "quantity": 1 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Dahon", "size": 16, "quantity": 3 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Dahon", "size": 17, "quantity": 2 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Dahon", "size": 18, "quantity": 1 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Dahon", "size": 19, "quantity": 3 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Dahong", "size": 20, "quantity": 1 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Black", "size": 15, "quantity": 1 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Black", "size": 20, "quantity": 1 },
//     { "box_number": 209, "style_code": "X0RL1337", "color": "Gray", "size": 13, "quantity": 1 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Gold", "size": 11, "quantity": 3 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Gold", "size": 12, "quantity": 6 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Gold", "size": 13, "quantity": 7 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Gold", "size": 14, "quantity": 3 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Gold", "size": 15, "quantity": 2 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Silver", "size": 11, "quantity": 4 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Silver", "size": 13, "quantity": 6 },
//     { "box_number": 210, "style_code": "X2DL2013", "color": "Silver", "size": 14, "quantity": 3 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Gray", "size": 19, "quantity": 1 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Gray", "size": 20, "quantity": 1 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Dahon", "size": 17, "quantity": 1 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Dahon", "size": 19, "quantity": 3 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Dahong", "size": 20, "quantity": 2 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Dahon", "size": 21, "quantity": 1 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Dahong", "size": 23, "quantity": 1 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Light coffee", "size": 15, "quantity": 1 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Light coffee", "size": 17, "quantity": 1 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Qianka", "size": 19, "quantity": 2 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Light coffee", "size": 20, "quantity": 3 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Qianka", "size": 21, "quantity": 2 },
//     { "box_number": 210, "style_code": "X0RL1391", "color": "Light Coffee", "size": 23, "quantity": 1 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "Pink", "size": 11, "quantity": 3 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "Pink", "size": 12, "quantity": 18 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "Pink", "size": 13, "quantity": 17 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "light green", "size": 11, "quantity": 4 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "light green", "size": 12, "quantity": 17 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "light green", "size": 13, "quantity": 17 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "dark gray", "size": 11, "quantity": 3 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "dark gray", "size": 12, "quantity": 18 },
//     { "box_number": 211, "style_code": "X2DA1029", "color": "dark gray", "size": 13, "quantity": 19 },
//     { "box_number": 211, "style_code": "X2DA1030", "color": "Pink", "size": 13, "quantity": 4 },
//     { "box_number": 212, "style_code": "XE200211", "color": "Pink", "size": 16, "quantity": 1 },
//     { "box_number": 212, "style_code": "XE200221", "color": "Ma Hui", "size": 14, "quantity": 5 },
//     { "box_number": 212, "style_code": "XE200221", "color": "Ma Hui", "size": 15, "quantity": 7 },
//     { "box_number": 212, "style_code": "XE200221", "color": "Ma Hui", "size": 16, "quantity": 8 },
//     { "box_number": 212, "style_code": "XE200221", "color": "Ma Hui", "size": 17, "quantity": 7 },
//     { "box_number": 212, "style_code": "XE200221", "color": "light blue", "size": 14, "quantity": 9 },
//     { "box_number": 212, "style_code": "XE200221", "color": "light blue", "size": 15, "quantity": 15 },
//     { "box_number": 212, "style_code": "XE200221", "color": "light blue", "size": 16, "quantity": 11 },
//     { "box_number": 212, "style_code": "XE200221", "color": "light blue", "size": 17, "quantity": 8 },
//     { "box_number": 213, "style_code": "X0DL2015", "color": "stamen powder", "size": 11, "quantity": 19 },
//     { "box_number": 213, "style_code": "X0DL2015", "color": "stamen powder", "size": 12, "quantity": 11 },
//     { "box_number": 213, "style_code": "X0DL2015", "color": "stamen powder", "size": 14, "quantity": 6 },
//     { "box_number": 213, "style_code": "X0DL2015", "color": "stamen powder", "size": 15, "quantity": 10 },
//     { "box_number": 213, "style_code": "X0DL2015", "color": "Gray", "size": 11, "quantity": 1 },
//     { "box_number": 213, "style_code": "X0DL2015", "color": "Moran", "size": 11, "quantity": 1 }
// ]

const datas = [
    {
        "box_number": 1,
        "style_code": "X1DL2018",
        "color": "gray blue",
        "size": 12,
        "quantity": 18
    },
    {
        "box_number": 1,
        "style_code": "X1DL2018",
        "color": "Gray blue",
        "size": 13,
        "quantity": 44
    },
    {
        "box_number": 1,
        "style_code": "X1DL2018",
        "color": "Gray blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 2,
        "style_code": "X1DL2018",
        "color": "gray blue",
        "size": 12,
        "quantity": 22
    },
    {
        "box_number": 2,
        "style_code": "X1DL2018",
        "color": "Gray blue",
        "size": 14,
        "quantity": 39
    },
    {
        "box_number": 3,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 3,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 3,
        "style_code": "H1DA0023",
        "color": "Yellow",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 3,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 3,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 3,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 3,
        "style_code": "H1RA0077",
        "color": "Ma Hui",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0077",
        "color": "bright yellow",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0077",
        "color": "tender yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0077",
        "color": "bright yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0091",
        "color": "Gray",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 3,
        "style_code": "H1RA0091",
        "color": "Blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0091",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0093",
        "color": "Light Khaki",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 3,
        "style_code": "H1RA0093",
        "color": "Light Khaki",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0127S",
        "color": "Big Red",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0127S",
        "color": "Big Red",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RA0129S",
        "color": "Sapphire",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "H1RQ0566",
        "color": "Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "X0DQX2500",
        "color": "Navy blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "XE100038",
        "color": "Gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "XE100038",
        "color": "Gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 3,
        "style_code": "XE100038",
        "color": "Gray",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 3,
        "style_code": "XE100038",
        "color": "Gray",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 3,
        "style_code": "XE100052",
        "color": "Gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "XE100052",
        "color": "Gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 3,
        "style_code": "XE100052",
        "color": "Gray",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 4,
        "style_code": "X0DD2500",
        "color": "Navy blue/red",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 4,
        "style_code": "X0DQX2500",
        "color": "Navy blue",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 4,
        "style_code": "X0DQX2511",
        "color": "Pink",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 4,
        "style_code": "X0DQX2511",
        "color": "black",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 4,
        "style_code": "X0DQX2511",
        "color": "blue gray",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 4,
        "style_code": "X0DQX2511",
        "color": "Lotus root starch",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 4,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 4,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 4,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 4,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 4,
        "style_code": "XE100038",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 5,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 51
    },
    {
        "box_number": 6,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 6,
        "style_code": "B0RL5053",
        "color": "light gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "B0RL5053",
        "color": "light gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 6,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 6,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 6,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 6,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 6,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "XE100038",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "XE100038",
        "color": "Gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 6,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 17,
        "quantity": 5
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 18,
        "quantity": 5
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 17,
        "quantity": 4
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 18,
        "quantity": 4
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "dark gray",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325",
        "color": "dark gray",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 20,
        "quantity": 20
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 7,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 8,
        "style_code": "B0RL5053",
        "color": "light gray",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 8,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 8,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 8,
        "style_code": "X0DD2500",
        "color": "Navy blue",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 8,
        "style_code": "X0DD2500",
        "color": "Navy blue/red",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 8,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 8,
        "style_code": "X1RL1318",
        "color": "Light gray",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 8,
        "style_code": "X1RL1318",
        "color": "Light blue",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 8,
        "style_code": "X1RL1318",
        "color": "Light blue",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 8,
        "style_code": "X1RL1318",
        "color": "Light blue",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 8,
        "style_code": "X1RL1318",
        "color": "light blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 8,
        "style_code": "X1RL1318",
        "color": "Navy blue",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 8,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 20,
        "quantity": 7
    },
    {
        "box_number": 8,
        "style_code": "X1RL1325",
        "color": "dark gray",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 8,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 8,
        "style_code": "X1RL1326S",
        "color": "",
        "size": "",
        "quantity": 10
    },
    {
        "box_number": 8,
        "style_code": "XE200271",
        "color": "Blue",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 9,
        "style_code": "X0DQX2521",
        "color": "Golden",
        "size": 12,
        "quantity": 19
    },
    {
        "box_number": 9,
        "style_code": "X0DQX2521",
        "color": "Golden",
        "size": 14,
        "quantity": 20
    },
    {
        "box_number": 9,
        "style_code": "X1RL1318",
        "color": "Light blue",
        "size": 10,
        "quantity": 7
    },
    {
        "box_number": 9,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 9,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 9,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "Blue",
        "size": 13,
        "quantity": 26
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "Blue",
        "size": 14,
        "quantity": 26
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "light gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "light gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "light gray",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "brick red",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "brick red",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 10,
        "style_code": "X1DA1058",
        "color": "brick red",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 10,
        "style_code": "X1RL1318",
        "color": "Navy blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 11,
        "style_code": "X0DD2500",
        "color": "Navy blue/red",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 11,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 11,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 11,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 11,
        "style_code": "X1DA1058",
        "color": "Blue",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 11,
        "style_code": "X1DA1058",
        "color": "Blue",
        "size": 13,
        "quantity": 13
    },
    {
        "box_number": 11,
        "style_code": "X1DA1058",
        "color": "Blue",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 11,
        "style_code": "X1DA1058",
        "color": "light gray",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 11,
        "style_code": "X1DA1058",
        "color": "light gray",
        "size": 13,
        "quantity": 9
    },
    {
        "box_number": 11,
        "style_code": "X1DA1058",
        "color": "light gray",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 11,
        "style_code": "X1DA1058",
        "color": "brick red",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 11,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 12,
        "style_code": "X0DD2500",
        "color": "Navy blue/red",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 12,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 12,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 19,
        "quantity": 6
    },
    {
        "box_number": 12,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 12,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 12,
        "style_code": "X1RL1325",
        "color": "dark gray",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 12,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 12,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 12,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 13,
        "style_code": "B0RL5053",
        "color": "light gray",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 13,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 13,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 13,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 19,
        "quantity": 19
    },
    {
        "box_number": 13,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 13,
        "style_code": "X1RL1325S",
        "color": "Dark gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 13,
        "style_code": "X2DL2013",
        "color": "golden",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 13,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 13,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 13,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "X0DQX2500",
        "color": "Big Red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 14,
        "style_code": "X0DQX2500",
        "color": "Navy blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "X0DQX2500",
        "color": "Navy blue red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 14,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 16,
        "quantity": 15
    },
    {
        "box_number": 14,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 14,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "X2DL2058",
        "color": "Apricot",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 14,
        "style_code": "XE100051",
        "color": "Big Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "XE100051",
        "color": "Apricot",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "XE100051",
        "color": "Apricot",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "XE100052",
        "color": "Gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 14,
        "style_code": "XE100052",
        "color": "Khaki",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 14,
        "style_code": "XE100072",
        "color": "Navy blue",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 15,
        "style_code": "X0DQX2500",
        "color": "Bean Paste Purple",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 15,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 16,
        "quantity": 10
    },
    {
        "box_number": 15,
        "style_code": "X1RL1318",
        "color": "Light blue",
        "size": 10,
        "quantity": 2
    },
    {
        "box_number": 15,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 17,
        "quantity": 4
    },
    {
        "box_number": 15,
        "style_code": "X2DL2013",
        "color": "golden",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 15,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 15,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 15,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 15,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 15,
        "style_code": "X2DL2058",
        "color": "Apricot",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 15,
        "style_code": "XE100051",
        "color": "Big Red",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 15,
        "style_code": "XE100052",
        "color": "Khaki",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 16,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 16,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 16
    },
    {
        "box_number": 16,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 16,
        "quantity": 9
    },
    {
        "box_number": 16,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 16,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 16,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 16,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 16,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 16,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 17,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 15,
        "quantity": 12
    },
    {
        "box_number": 17,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 16,
        "quantity": 16
    },
    {
        "box_number": 17,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 17,
        "quantity": 14
    },
    {
        "box_number": 17,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 17,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 19,
        "quantity": 6
    },
    {
        "box_number": 18,
        "style_code": "X0DQX2521",
        "color": "Pink",
        "size": 13,
        "quantity": 9
    },
    {
        "box_number": 18,
        "style_code": "X0DQX2521",
        "color": "Pink",
        "size": 14,
        "quantity": 24
    },
    {
        "box_number": 18,
        "style_code": "XE100073",
        "color": "Rose Red",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 18,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 18,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 13,
        "quantity": 9
    },
    {
        "box_number": 18,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 14,
        "quantity": 12
    },
    {
        "box_number": 18,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 15,
        "quantity": 15
    },
    {
        "box_number": 18,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 16,
        "quantity": 9
    },
    {
        "box_number": 19,
        "style_code": "XE100052",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 19,
        "style_code": "XE100052",
        "color": "Khaki",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 19,
        "style_code": "XE100052",
        "color": "Khaki",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 19,
        "style_code": "XE100052",
        "color": "Khaki",
        "size": 14,
        "quantity": 25
    },
    {
        "box_number": 19,
        "style_code": "XE100052",
        "color": "Khaki",
        "size": 15,
        "quantity": 29
    },
    {
        "box_number": 19,
        "style_code": "XE100052",
        "color": "Khaki",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 19,
        "style_code": "XE100072",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Gray",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Gray",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Gray",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Rose Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Rose Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Rose Red",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 19,
        "style_code": "XE100073",
        "color": "Light pink",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 20,
        "style_code": "H0DA0092",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "H0DA0092",
        "color": "Gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "H0DA0111",
        "color": "White",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "H0DA0111",
        "color": "Black",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 20,
        "style_code": "H0DA0117",
        "color": "Black",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "H0DA0118",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "H0DA0118",
        "color": "Pink",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "H0DA0118",
        "color": "Tibetan Blue",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "H0DA0166",
        "color": "Black",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "XE100072",
        "color": "Black",
        "size": 17,
        "quantity": 5
    },
    {
        "box_number": 20,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 20,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 20,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 20,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 16,
        "quantity": 12
    },
    {
        "box_number": 20,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 17,
        "quantity": 12
    },
    {
        "box_number": 20,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 18,
        "quantity": 12
    },
    {
        "box_number": 20,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 19,
        "quantity": 12
    },
    {
        "box_number": 21,
        "style_code": "X0DL2011",
        "color": "yellow",
        "size": "",
        "quantity": 8
    },
    {
        "box_number": 21,
        "style_code": "X0DL2015",
        "color": "stamen powder",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 21,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 21,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 20,
        "quantity": 11
    },
    {
        "box_number": 21,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 21,
        "quantity": 6
    },
    {
        "box_number": 21,
        "style_code": "X0RL1389",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 21,
        "style_code": "X0RL1389",
        "color": "Black",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 21,
        "style_code": "X0RL1391",
        "color": "Light coffee",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 21,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 21,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 21,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 22,
        "style_code": "X0DL2011",
        "color": "yellow",
        "size": "",
        "quantity": 16
    },
    {
        "box_number": 22,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 22,
        "style_code": "X0DL2015",
        "color": "stamen powder",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 22,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 20,
        "quantity": 3
    },
    {
        "box_number": 22,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 23,
        "quantity": 5
    },
    {
        "box_number": 22,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 21,
        "quantity": 5
    },
    {
        "box_number": 22,
        "style_code": "X1DL2007",
        "color": "Apricot",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 22,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 22,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 22,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 23,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 23,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 23,
        "style_code": "X0DL2085",
        "color": "Sapphire",
        "size": 23,
        "quantity": 5
    },
    {
        "box_number": 23,
        "style_code": "X1DL2017",
        "color": "Bean paste color",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 23,
        "style_code": "X1DL2017",
        "color": "Gray",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 23,
        "style_code": "X1DL2017",
        "color": "Bean paste color",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 23,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 12,
        "quantity": 8
    },
    {
        "box_number": 23,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 23,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 23,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 11,
        "quantity": 23
    },
    {
        "box_number": 23,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 24,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 5
    },
    {
        "box_number": 24,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 14
    },
    {
        "box_number": 24,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 24,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 18,
        "quantity": 4
    },
    {
        "box_number": 24,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 24,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 24,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 24,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 24,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 24,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 24,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 25,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 12
    },
    {
        "box_number": 25,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X0DL2036",
        "color": "Pink",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X0DL2037",
        "color": "Black",
        "size": 23,
        "quantity": 9
    },
    {
        "box_number": 25,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 19,
        "quantity": 5
    },
    {
        "box_number": 25,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 25,
        "style_code": "X0RL1280",
        "color": "Pink",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X1DL2017",
        "color": "Bean paste color",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X1DL2017",
        "color": "Navy blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 25,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 25,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 25,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 25,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 26,
        "style_code": "HE106030",
        "color": "Dark blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 26,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 5
    },
    {
        "box_number": 26,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 26,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 26,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 11,
        "quantity": 9
    },
    {
        "box_number": 26,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 26,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 22,
        "quantity": 4
    },
    {
        "box_number": 26,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 20,
        "quantity": 5
    },
    {
        "box_number": 26,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 26,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 26,
        "style_code": "X0DL2085",
        "color": "Sapphire",
        "size": 22,
        "quantity": 8
    },
    {
        "box_number": 26,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 26,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 26,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 27,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 27,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 27,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 27,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 27,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 27,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 20,
        "quantity": 7
    },
    {
        "box_number": 27,
        "style_code": "X0DL2085",
        "color": "Sapphire",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 27,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 27,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 27,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 13
    },
    {
        "box_number": 27,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 28,
        "style_code": "X0DQX2521",
        "color": "Pink",
        "size": 12,
        "quantity": 24
    },
    {
        "box_number": 28,
        "style_code": "X0DQX2521",
        "color": "Pink",
        "size": 13,
        "quantity": 12
    },
    {
        "box_number": 28,
        "style_code": "X0DQX2521",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 28,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 28,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 28,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 28,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 19,
        "quantity": 6
    },
    {
        "box_number": 28,
        "style_code": "XE200275",
        "color": "Gray powder",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 28,
        "style_code": "XE200275",
        "color": "Gray powder",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200275",
        "color": "Gray powder",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 28,
        "style_code": "XE200275",
        "color": "blue gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200275",
        "color": "blue gray",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 28,
        "style_code": "XE200275",
        "color": "Rice color",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 28,
        "style_code": "XE200276",
        "color": "Beige",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200276",
        "color": "Beige",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200277",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200277",
        "color": "Blue",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 28,
        "style_code": "XE200277",
        "color": "Blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200277",
        "color": "Blue",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200277",
        "color": "Blue",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 28,
        "style_code": "XE200277",
        "color": "Green",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 29,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 29,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 29,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 22,
        "quantity": 4
    },
    {
        "box_number": 29,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 29,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 29,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 21,
        "quantity": 5
    },
    {
        "box_number": 29,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 10
    },
    {
        "box_number": 29,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 21,
        "quantity": 2
    },
    {
        "box_number": 29,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 23,
        "quantity": 5
    },
    {
        "box_number": 29,
        "style_code": "X0RL1385",
        "color": "light green",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 29,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 29,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 30,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 12,
        "quantity": 8
    },
    {
        "box_number": 30,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 30,
        "style_code": "X1DL2026",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 30,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 12,
        "quantity": 19
    },
    {
        "box_number": 30,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 13,
        "quantity": 17
    },
    {
        "box_number": 30,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 14,
        "quantity": 17
    },
    {
        "box_number": 31,
        "style_code": "H1DA0030",
        "color": "blue",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 31,
        "style_code": "H1DA0030",
        "color": "forest green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 31,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 31,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 31,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 31,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 12,
        "quantity": 12
    },
    {
        "box_number": 31,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 13,
        "quantity": 12
    },
    {
        "box_number": 31,
        "style_code": "X1DL2026",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 31,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 31,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 31,
        "style_code": "X2DL2028",
        "color": "Leather powder",
        "size": 12,
        "quantity": 11
    },
    {
        "box_number": 31,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 31,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 31,
        "style_code": "XE200221",
        "color": "light blue",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 31,
        "style_code": "XE200221",
        "color": "light blue",
        "size": 16,
        "quantity": 15
    },
    {
        "box_number": 32,
        "style_code": "H1DA0030",
        "color": "forest green",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 32,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 10,
        "quantity": 9
    },
    {
        "box_number": 32,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 11,
        "quantity": 16
    },
    {
        "box_number": 32,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 12,
        "quantity": 18
    },
    {
        "box_number": 32,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 32,
        "style_code": "X2DL2028",
        "color": "Leather powder",
        "size": 12,
        "quantity": 11
    },
    {
        "box_number": 32,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 32,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 32,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 32,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Cream Brown",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Cream Brown",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 12,
        "quantity": 15
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 33,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 14,
        "quantity": 14
    },
    {
        "box_number": 34,
        "style_code": "X2DL2028",
        "color": "Gray blue",
        "size": 12,
        "quantity": 14
    },
    {
        "box_number": 34,
        "style_code": "X2DL2028",
        "color": "Gray blue",
        "size": 13,
        "quantity": 14
    },
    {
        "box_number": 34,
        "style_code": "X2DL2028",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 13
    },
    {
        "box_number": 34,
        "style_code": "X2DL2028",
        "color": "Leather powder",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 34,
        "style_code": "X2DL2028",
        "color": "Skin powder",
        "size": 13,
        "quantity": 30
    },
    {
        "box_number": 34,
        "style_code": "X2DL2028",
        "color": "Leather powder",
        "size": 14,
        "quantity": 21
    },
    {
        "box_number": 34,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 13
    },
    {
        "box_number": 34,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 28
    },
    {
        "box_number": 34,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 31
    },
    {
        "box_number": 34,
        "style_code": "X2DL2030",
        "color": "Cream Brown",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 34,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 34,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 34,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325",
        "color": "dark gray",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 6
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325S",
        "color": "Dark gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325S",
        "color": "Dark gray",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 35,
        "style_code": "X1RL1325S",
        "color": "Dark gray",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 36,
        "style_code": "X0DL2015",
        "color": "stamen powder",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 36,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 36,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 23,
        "quantity": 10
    },
    {
        "box_number": 36,
        "style_code": "X0DL2032",
        "color": "Black",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 36,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 21,
        "quantity": 2
    },
    {
        "box_number": 36,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 9
    },
    {
        "box_number": 36,
        "style_code": "X0RL1385",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 36,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 36,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 36,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "H0DA0157",
        "color": "white powder",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "H0DA0157",
        "color": "white gray green",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 37,
        "style_code": "H0DA0157",
        "color": "white/pink",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 37,
        "style_code": "H0DA0157",
        "color": "white/pink",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "H0DA0157",
        "color": "white/grey green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "H0DA0157",
        "color": "White/grey green",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 37,
        "style_code": "H0DA0166",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "H2RQ0506",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "H2RQ0610",
        "color": "dark gray",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "X1DA1057",
        "color": "Orange",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 37,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 37,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1637",
        "color": "Coffee",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1637",
        "color": "coffee",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1637",
        "color": "Coffee",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1637",
        "color": "dark gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1637",
        "color": "dark gray",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1637",
        "color": "dark gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1638",
        "color": "Gray",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1638",
        "color": "Gray",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1638",
        "color": "Gray",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1638",
        "color": "dark gray",
        "size": 11,
        "quantity": 6
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1638",
        "color": "dark gray",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 37,
        "style_code": "X1RQ1638",
        "color": "dark gray",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 37,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 38,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 22,
        "quantity": 12
    },
    {
        "box_number": 38,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 23,
        "quantity": 10
    },
    {
        "box_number": 38,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 20,
        "quantity": 7
    },
    {
        "box_number": 38,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 38,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 21,
        "quantity": 5
    },
    {
        "box_number": 38,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 23,
        "quantity": 5
    },
    {
        "box_number": 39,
        "style_code": "X0DL2031",
        "color": "Apricot",
        "size": 23,
        "quantity": 4
    },
    {
        "box_number": 39,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 20,
        "quantity": 5
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 21,
        "quantity": 9
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 19,
        "quantity": 10
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 39,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 21,
        "quantity": 6
    },
    {
        "box_number": 40,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 12,
        "quantity": 31
    },
    {
        "box_number": 40,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 23,
        "quantity": 7
    },
    {
        "box_number": 40,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 40,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 40,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 40,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 40,
        "style_code": "X2DL2012",
        "color": "Shacha red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 41,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 21,
        "quantity": 4
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 22,
        "quantity": 7
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 23,
        "quantity": 3
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 16,
        "quantity": 8
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 23,
        "quantity": 3
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 42,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 42,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 43,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 44,
        "style_code": "X0RQ1753",
        "color": "Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X0RQ2018",
        "color": "Black",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X0RQ2021",
        "color": "Pink",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X0RQ2028",
        "color": "Big Red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X1RQ1637",
        "color": "dark gray",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X1RQ1638",
        "color": "Gray",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X1RQ1667",
        "color": "Brown",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X1RQ1668",
        "color": "Black",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 44,
        "style_code": "X1RQ1668",
        "color": "blue gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X1RQ1668",
        "color": "blue gray",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 44,
        "style_code": "X1RQ1679",
        "color": "dark gray",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Pink",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Pink",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Yellow",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Yellow",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Yellow",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Orange",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 44,
        "style_code": "X2DA1072",
        "color": "Orange",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 44,
        "style_code": "X2DA1073",
        "color": "Green",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 44,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 44,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 44,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 44,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 12
    },
    {
        "box_number": 44,
        "style_code": "X2RQ1652",
        "color": "Big Red",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X2RQ1652",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "X2RQ1652",
        "color": "Gray",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 44,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 44,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 44,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "golden",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 45,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 15
    },
    {
        "box_number": 45,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 45,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 16,
        "quantity": 9
    },
    {
        "box_number": 46,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 46,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 46,
        "style_code": "X2DA1072",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DA1072",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DA1072",
        "color": "Yellow",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 46,
        "style_code": "X2DA1072",
        "color": "Yellow",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 46,
        "style_code": "X2DA1072",
        "color": "Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DA1169",
        "color": "Meat powder",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 46,
        "style_code": "X2DA1169",
        "color": "Meat powder",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 46,
        "style_code": "X2DA1169",
        "color": "Meat powder",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 46,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 46,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 46,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 47,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 16,
        "quantity": 10
    },
    {
        "box_number": 47,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 47,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 18,
        "quantity": 13
    },
    {
        "box_number": 47,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 47,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 17,
        "quantity": 11
    },
    {
        "box_number": 47,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 48,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 48,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 14,
        "quantity": 36
    },
    {
        "box_number": 48,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 15,
        "quantity": 26
    },
    {
        "box_number": 49,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 15,
        "quantity": 39
    },
    {
        "box_number": 49,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 15,
        "quantity": 24
    },
    {
        "box_number": 50,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 50,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 12,
        "quantity": 21
    },
    {
        "box_number": 50,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 50,
        "style_code": "X0DD2500",
        "color": "Navy blue/red",
        "size": 13,
        "quantity": 14
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 14,
        "quantity": 18
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 15,
        "quantity": 14
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 51,
        "style_code": "X0DD2500",
        "color": "Navy blue/red",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 52,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 12,
        "quantity": 16
    },
    {
        "box_number": 52,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 52,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 15,
        "quantity": 21
    },
    {
        "box_number": 52,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 53,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 53,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 53,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 53,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 19,
        "quantity": 8
    },
    {
        "box_number": 53,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 11,
        "quantity": 12
    },
    {
        "box_number": 53,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 53,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 54,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 16,
        "quantity": 43
    },
    {
        "box_number": 54,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 17,
        "quantity": 20
    },
    {
        "box_number": 55,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 17,
        "quantity": 8
    },
    {
        "box_number": 55,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 13,
        "quantity": 26
    },
    {
        "box_number": 55,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 14,
        "quantity": 29
    },
    {
        "box_number": 56,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 16,
        "quantity": 17
    },
    {
        "box_number": 56,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 13,
        "quantity": 19
    },
    {
        "box_number": 56,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 14,
        "quantity": 16
    },
    {
        "box_number": 56,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 15,
        "quantity": 11
    },
    {
        "box_number": 57,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 16,
        "quantity": 54
    },
    {
        "box_number": 57,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 57,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 58,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 18,
        "quantity": 11
    },
    {
        "box_number": 58,
        "style_code": "X0DL2037",
        "color": "dark gray",
        "size": 17,
        "quantity": 9
    },
    {
        "box_number": 58,
        "style_code": "X0DL2085",
        "color": "Navy blue",
        "size": 22,
        "quantity": 13
    },
    {
        "box_number": 58,
        "style_code": "X0DL2085",
        "color": "Navy blue",
        "size": 23,
        "quantity": 11
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 17,
        "quantity": 14
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 20,
        "quantity": 13
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 17,
        "quantity": 8
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 18,
        "quantity": 7
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 17,
        "quantity": 5
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 59,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 5
    },
    {
        "box_number": 60,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 60,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 60,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 60,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 60,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 60,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 17,
        "quantity": 4
    },
    {
        "box_number": 60,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 16,
        "quantity": 9
    },
    {
        "box_number": 60,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 6
    },
    {
        "box_number": 61,
        "style_code": "H2RL0206",
        "color": "Meat Powder",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 61,
        "style_code": "H2RL0206",
        "color": "Meat Powder",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 61,
        "style_code": "H2RL0206",
        "color": "Meat Powder",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 61,
        "style_code": "H2RL0206",
        "color": "Meat Powder",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 61,
        "style_code": "H2RL0206",
        "color": "Flesh Powder",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326",
        "color": "Blue",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326",
        "color": "Fluorescent Green",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326",
        "color": "fluorescent green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326S",
        "color": "",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 61,
        "style_code": "X1RL1326",
        "color": "Fluorescent Green",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 62,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 62,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 62,
        "style_code": "X0DQX2500",
        "color": "Navy",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 62,
        "style_code": "X0DQX2500",
        "color": "Navy",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 62,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 62,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 62,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 62,
        "style_code": "X1RL1325M",
        "color": "Dark Gray",
        "size": 16,
        "quantity": 14
    },
    {
        "box_number": 62,
        "style_code": "X1RL1325S",
        "color": "Dark Gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 62,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 62,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 12,
        "quantity": 10
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326S",
        "color": "",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326S",
        "color": "",
        "size": " ",
        "quantity": 1
    },
    {
        "box_number": 63,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 64,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 16,
        "quantity": 16
    },
    {
        "box_number": 64,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 14,
        "quantity": 26
    },
    {
        "box_number": 64,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 12,
        "quantity": 8
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 65,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 65,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 16,
        "quantity": 11
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Pink",
        "size": 16,
        "quantity": 9
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 66,
        "style_code": "H0DA0108",
        "color": "Gray",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 66,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 66,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 66,
        "style_code": "X2DL2058",
        "color": "Apricot",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "X2DL2058",
        "color": "Apricot",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "X2DL2058",
        "color": "Taro Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "X2DL2058",
        "color": "Taro Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 66,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 66,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 67,
        "style_code": "H1DA0006",
        "color": "Yello",
        "size": 8,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "H1DA0006",
        "color": "Matcha Gree",
        "size": 8,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "H1DA0006",
        "color": "Matcha Gree",
        "size": 9,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "H1DA0006",
        "color": "Light blu",
        "size": 8,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "Light Gra",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "Light Gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "Light Gray",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "light green",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "Light green",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "light gree",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "Apricot",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "Apricot",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 67,
        "style_code": "H1DL0658",
        "color": "Apricot",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X0DQX2511",
        "color": "Big Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X0DQX2511",
        "color": "Big Red",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X0DQX2511",
        "color": "Big Red",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X0DQX2511",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X1DA1058",
        "color": "Brick Red",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 67,
        "style_code": "X1DA1058",
        "color": "Brick Red",
        "size": 13,
        "quantity": 17
    },
    {
        "box_number": 67,
        "style_code": "X1DA1058",
        "color": "Brick Red",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 67,
        "style_code": "X2DL2057",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X2DL2057",
        "color": "Aprico",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 67,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "XE200270",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "XE200277",
        "color": "Pink",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 67,
        "style_code": "XE200277",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 67,
        "style_code": "XE200277",
        "color": "Blue",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 68,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 14,
        "quantity": 13
    },
    {
        "box_number": 68,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 15,
        "quantity": 26
    },
    {
        "box_number": 68,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 16,
        "quantity": 12
    },
    {
        "box_number": 69,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 13,
        "quantity": 13
    },
    {
        "box_number": 69,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 14,
        "quantity": 16
    },
    {
        "box_number": 69,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 69,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 69,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 69,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 69,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 69,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 69,
        "style_code": "X2DL2011",
        "color": "Sauvignon",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 70,
        "style_code": "X0DL2011",
        "color": "Yellow",
        "size": "",
        "quantity": 6
    },
    {
        "box_number": 70,
        "style_code": "X0DL2011",
        "color": "Yellow",
        "size": "",
        "quantity": 10
    },
    {
        "box_number": 70,
        "style_code": "X0DL2011",
        "color": "Sauvignon Blanc",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 70,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 70,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 70,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 70,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 70,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 70,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 70,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 70,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 70,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 70,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 14,
        "quantity": 12
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 11,
        "quantity": 7
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 71,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 71,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 71,
        "style_code": "X2DL2010",
        "color": "Soybean Green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 71,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 71,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 71,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 71,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 71,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "Soybean Sand",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "Soybean Sand",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 13,
        "quantity": 12
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 11,
        "quantity": 8
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 13,
        "quantity": 9
    },
    {
        "box_number": 72,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 14,
        "quantity": 12
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "Beige",
        "size": 11,
        "quantity": 15
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "Soy",
        "size": 12,
        "quantity": 12
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "Soybean Sand",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 11,
        "quantity": 12
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 13,
        "quantity": 9
    },
    {
        "box_number": 73,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 74,
        "style_code": "HE106030",
        "color": "Bean Sand",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 74,
        "style_code": "HE106030",
        "color": "Soybean",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 74,
        "style_code": "HE106030",
        "color": "Beige",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 74,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 74,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 74,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 74,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 74,
        "style_code": "X0DL2015",
        "color": "Pistil Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 74,
        "style_code": "X0DL2031",
        "color": "navy",
        "size": 22,
        "quantity": 8
    },
    {
        "box_number": 74,
        "style_code": "X0DL2085",
        "color": "navy blue",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 74,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 74,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 74,
        "style_code": "XT0RL15061",
        "color": "Black",
        "size": 12,
        "quantity": 8
    },
    {
        "box_number": 75,
        "style_code": "L2RL6215",
        "color": "Pink",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 75,
        "style_code": "L2RL6215",
        "color": "Pink",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 75,
        "style_code": "L2RL6215",
        "color": "Pink",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 75,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 20
    },
    {
        "box_number": 75,
        "style_code": "X0DL2031",
        "color": "Navy",
        "size": 22,
        "quantity": 5
    },
    {
        "box_number": 75,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 75,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 21,
        "quantity": 3
    },
    {
        "box_number": 75,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 76,
        "style_code": "B1BA5023",
        "color": "Blue",
        "size": 12,
        "quantity": 33
    },
    {
        "box_number": 76,
        "style_code": "B1BA5023",
        "color": "Blue",
        "size": 13,
        "quantity": 14
    },
    {
        "box_number": 76,
        "style_code": "B1BA5023",
        "color": "Lotus root pink",
        "size": 12,
        "quantity": 16
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Pistil Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 11,
        "quantity": 6
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 77,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 78,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 30
    },
    {
        "box_number": 78,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 11,
        "quantity": 7
    },
    {
        "box_number": 78,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 78,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 78,
        "style_code": "X0DL2037",
        "color": "Black",
        "size": 19,
        "quantity": 6
    },
    {
        "box_number": 78,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 78,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 78,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X0DL2015",
        "color": "Pistil Pin",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 79,
        "style_code": "X0DL2015",
        "color": "Pistil Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X0DL2015",
        "color": "Pistil Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 79,
        "style_code": "X0DL2015",
        "color": "Stamen powder",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X0DL2015",
        "color": "Pistil Pink",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 79,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Sacha Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Sacha Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Salsa Red",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 79,
        "style_code": "X2DL2012",
        "color": "Sacha Red",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 13
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Sacha Red",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Sacha Red",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 80,
        "style_code": "X2DL2012",
        "color": "Sacha Red",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 81,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 11,
        "quantity": 7
    },
    {
        "box_number": 81,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 12,
        "quantity": 13
    },
    {
        "box_number": 81,
        "style_code": "H2DA0026",
        "color": "Light Gree",
        "size": 11,
        "quantity": 9
    },
    {
        "box_number": 81,
        "style_code": "H2DA0026",
        "color": "Light Green",
        "size": 12,
        "quantity": 24
    },
    {
        "box_number": 81,
        "style_code": "H2DA0026",
        "color": "Light gree",
        "size": 13,
        "quantity": 23
    },
    {
        "box_number": 81,
        "style_code": "H2DA0026",
        "color": "light gree",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 82,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 22,
        "quantity": 2
    },
    {
        "box_number": 82,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 22,
        "quantity": 18
    },
    {
        "box_number": 82,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 22,
        "quantity": 20
    },
    {
        "box_number": 83,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 83,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 83,
        "style_code": "H2DA0026",
        "color": "Light Green",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 83,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 20,
        "quantity": 11
    },
    {
        "box_number": 83,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 83,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 22,
        "quantity": 5
    },
    {
        "box_number": 83,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 23,
        "quantity": 3
    },
    {
        "box_number": 83,
        "style_code": "X2DL2010",
        "color": "Soybean Green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 83,
        "style_code": "X2DL2010",
        "color": "Soybean Sand Gree",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 83,
        "style_code": "X2DL2010",
        "color": "Dark Pin",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 83,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 83,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 83,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 14,
        "quantity": 18
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Bean Paste Green",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 84,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 85,
        "style_code": "X0DL2011",
        "color": "Soybean paste red",
        "size": "",
        "quantity": 5
    },
    {
        "box_number": 85,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 85,
        "style_code": "X2DL2010",
        "color": "Soybean paste green",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 85,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 85,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 85,
        "style_code": "X2DL2011",
        "color": "Soy Sauce Re",
        "size": 14,
        "quantity": 18
    },
    {
        "box_number": 85,
        "style_code": "X2DL2011",
        "color": "Soy Sauce Re",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 86,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 86,
        "style_code": "X2DL2010",
        "color": "Dark Pin",
        "size": 14,
        "quantity": 22
    },
    {
        "box_number": 86,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 15,
        "quantity": 23
    },
    {
        "box_number": 87,
        "style_code": "XT0RL15061",
        "color": "Flesh Pink",
        "size": 11,
        "quantity": 53
    },
    {
        "box_number": 88,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 88,
        "style_code": "X0DD2500",
        "color": "Navy",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 88,
        "style_code": "X0DQX2500",
        "color": "Big Re",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 88,
        "style_code": "X0DQX2500",
        "color": "Gray Green",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 88,
        "style_code": "X0DQX2500",
        "color": "Gray Green",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 88,
        "style_code": "X0DQX2500",
        "color": "nav",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 88,
        "style_code": "X0DQX2500",
        "color": "nav",
        "size": 16,
        "quantity": 26
    },
    {
        "box_number": 89,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 89,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 16,
        "quantity": 15
    },
    {
        "box_number": 89,
        "style_code": "X0DD2500",
        "color": "nav",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2500",
        "color": "Red",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2500",
        "color": "Soybean Sand Purpl",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2500",
        "color": "Gray Green",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2500",
        "color": "Gray Green",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2500",
        "color": "Gray Gree",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2500",
        "color": "nav",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 19,
        "quantity": 11
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 89,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 90,
        "style_code": "X2RL1328",
        "color": "Red",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 90,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 90,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 90,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 90,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 90,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 90,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 91,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 9
    },
    {
        "box_number": 91,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 91,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 91,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 91,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 91,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 15,
        "quantity": 9
    },
    {
        "box_number": 92,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 2
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Big Red",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 92,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 93,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 11
    },
    {
        "box_number": 93,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 23,
        "quantity": 27
    },
    {
        "box_number": 94,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 18,
        "quantity": 4
    },
    {
        "box_number": 94,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 20,
        "quantity": 5
    },
    {
        "box_number": 94,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 94,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 94,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 94,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 19,
        "quantity": 9
    },
    {
        "box_number": 94,
        "style_code": "X1RL1325M",
        "color": "Dark Gray",
        "size": 20,
        "quantity": 10
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Soybean green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Soybean Sand Green",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 95,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 15,
        "quantity": 11
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Bean Paste Green",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 96,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 97,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 97,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 12,
        "quantity": 16
    },
    {
        "box_number": 97,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 97,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 97,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Pistil",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Pistil",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Pistil powder",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Stamen powder",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 11,
        "quantity": 15
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Butter Gree",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 98,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Pistil Pin",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Pistil Powder",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Pistil Pin",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Gra",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Butter Gree",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 99,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Soybean paste green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Dark Powde",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 99,
        "style_code": "X2DL2010",
        "color": "Dark Pin",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 100,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 101,
        "style_code": "HE106030",
        "color": "Soybean San",
        "size": 11,
        "quantity": 16
    },
    {
        "box_number": 101,
        "style_code": "HE106030",
        "color": "Soybean San",
        "size": 12,
        "quantity": 17
    },
    {
        "box_number": 101,
        "style_code": "HE106030",
        "color": "Soybean Sand",
        "size": 13,
        "quantity": 18
    },
    {
        "box_number": 101,
        "style_code": "HE106030",
        "color": "Bean Sand",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 101,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 101,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 12,
        "quantity": 16
    },
    {
        "box_number": 101,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 102,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 102,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 102,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 13,
        "quantity": 16
    },
    {
        "box_number": 102,
        "style_code": "HE106030",
        "color": "Dark Blue",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 102,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 23,
        "quantity": 20
    },
    {
        "box_number": 103,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 103,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 103,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 12
    },
    {
        "box_number": 103,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 12,
        "quantity": 10
    },
    {
        "box_number": 103,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 12
    },
    {
        "box_number": 103,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 103,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 17,
        "quantity": 4
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 18,
        "quantity": 15
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 19,
        "quantity": 9
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325",
        "color": "Dark Gray",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325",
        "color": "Dark Gray",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 104,
        "style_code": "X1RL1325",
        "color": "Dark Gray",
        "size": 20,
        "quantity": 3
    },
    {
        "box_number": 105,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 12,
        "quantity": 14
    },
    {
        "box_number": 105,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 105,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 105,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 15,
        "quantity": 16
    },
    {
        "box_number": 105,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 105,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 106,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 106,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 106,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 106,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 106,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 106,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 106,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 15,
        "quantity": 9
    },
    {
        "box_number": 106,
        "style_code": "X0RL1280",
        "color": "Pink",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 106,
        "style_code": "X0RL1280",
        "color": "Pink",
        "size": 17,
        "quantity": 8
    },
    {
        "box_number": 107,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 7
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 107,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 15,
        "quantity": 21
    },
    {
        "box_number": 108,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 108,
        "style_code": "X2DL2012",
        "color": "Soybean paste green",
        "size": 15,
        "quantity": 11
    },
    {
        "box_number": 108,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 108,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 108,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 108,
        "style_code": "X2DL2012",
        "color": "Sacha Red",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 108,
        "style_code": "X2DL2012",
        "color": "Salsa Red",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 109,
        "style_code": "XT0RL15061",
        "color": "Sapphire Blu",
        "size": 10,
        "quantity": 15
    },
    {
        "box_number": 109,
        "style_code": "XT0RL15061",
        "color": "Flesh Pin",
        "size": 12,
        "quantity": 39
    },
    {
        "box_number": 110,
        "style_code": "B0RL5053",
        "color": "Light Pin",
        "size": 14,
        "quantity": 35
    },
    {
        "box_number": 110,
        "style_code": "B0RL5053",
        "color": "navy blu",
        "size": 13,
        "quantity": 26
    },
    {
        "box_number": 111,
        "style_code": "X1DL2025",
        "color": "Gray Orchi",
        "size": 12,
        "quantity": 14
    },
    {
        "box_number": 111,
        "style_code": "X1DL2025",
        "color": "Gray Orchid",
        "size": 13,
        "quantity": 17
    },
    {
        "box_number": 111,
        "style_code": "X1DL2025",
        "color": "Gray blue",
        "size": 14,
        "quantity": 20
    },
    {
        "box_number": 111,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 111,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 16
    },
    {
        "box_number": 112,
        "style_code": "X1DL2025",
        "color": "Gray Orchid",
        "size": 12,
        "quantity": 8
    },
    {
        "box_number": 112,
        "style_code": "X1DL2025",
        "color": "Gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 112,
        "style_code": "X1DL2025",
        "color": "Gray",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 112,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 22
    },
    {
        "box_number": 112,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 19
    },
    {
        "box_number": 112,
        "style_code": "X1DL2025",
        "color": "Gray Blue Green",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 112,
        "style_code": "X1DL2025",
        "color": "Cream Brow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 113,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 11,
        "quantity": 15
    },
    {
        "box_number": 113,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 113,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 113,
        "style_code": "H2DA0026",
        "color": "Light Green",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 113,
        "style_code": "H2DA0026",
        "color": "Light Green",
        "size": 12,
        "quantity": 15
    },
    {
        "box_number": 113,
        "style_code": "H2DA0026",
        "color": "Light Green",
        "size": 13,
        "quantity": 16
    },
    {
        "box_number": 113,
        "style_code": "H2DA0026",
        "color": "Light Gree",
        "size": 14,
        "quantity": 21
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Bean paste green",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Dark Powder",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 114,
        "style_code": "X2DL2010",
        "color": "Dark Pin",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 114,
        "style_code": "XT0RL15061",
        "color": "Black",
        "size": 12,
        "quantity": 13
    },
    {
        "box_number": 115,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 15,
        "quantity": 12
    },
    {
        "box_number": 115,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 16,
        "quantity": 10
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325M",
        "color": "Dark Gray",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325M",
        "color": "Dark Gray",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 115,
        "style_code": "X1RL1325M",
        "color": "Dark Gray",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 115,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 13,
        "quantity": 12
    },
    {
        "box_number": 116,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 116,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 15,
        "quantity": 14
    },
    {
        "box_number": 116,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 16,
        "quantity": 10
    },
    {
        "box_number": 117,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 117,
        "style_code": "H2DA0026",
        "color": "Light Green",
        "size": 12,
        "quantity": 28
    },
    {
        "box_number": 117,
        "style_code": "H2DA0026",
        "color": "Light Green",
        "size": 13,
        "quantity": 24
    },
    {
        "box_number": 117,
        "style_code": "X0DL2011",
        "color": "yellow",
        "size": "",
        "quantity": 5
    },
    {
        "box_number": 117,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 117,
        "style_code": "X2DL2011",
        "color": "yello",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 117,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 117,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 118,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 118,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 118,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 118,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Gray Orchid",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Gray",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Gray",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Gray Blue Green",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Cream Brown",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 119,
        "style_code": "X1DL2025",
        "color": "Cream Brown",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 119,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 119,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 119,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 119,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 16,
        "quantity": 10
    },
    {
        "box_number": 120,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 13,
        "quantity": 20
    },
    {
        "box_number": 120,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 120,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 15,
        "quantity": 13
    },
    {
        "box_number": 120,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 16,
        "quantity": 12
    },
    {
        "box_number": 121,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 121,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 121,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 121,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 16,
        "quantity": 23
    },
    {
        "box_number": 122,
        "style_code": "X1DL2025",
        "color": "Gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 122,
        "style_code": "X1DL2025",
        "color": "Gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 122,
        "style_code": "X1DL2025",
        "color": "Gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 122,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 122,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 122,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 122,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 122,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 122,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 122,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 123,
        "style_code": "X1DL2026",
        "color": "Gray Orchid",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 123,
        "style_code": "X1DL2026",
        "color": "Gray",
        "size": 13,
        "quantity": 12
    },
    {
        "box_number": 123,
        "style_code": "X1DL2026",
        "color": "Gray",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 123,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 12,
        "quantity": 14
    },
    {
        "box_number": 123,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 123,
        "style_code": "X1DL2026",
        "color": "Chinese Yellow",
        "size": 14,
        "quantity": 21
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Gray",
        "size": 12,
        "quantity": 14
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Gray",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Gray Orchid",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Almond Tea",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Almond Tea",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Almond Tea",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Chinese Yellow",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Chinese Yellow",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 124,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 124,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 12,
        "quantity": 11
    },
    {
        "box_number": 124,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 124,
        "style_code": "X2DA1030",
        "color": "Light Gree",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 124,
        "style_code": "X2DA1030",
        "color": "Light Green",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 10,
        "quantity": 12
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 11,
        "quantity": 16
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Forest Green",
        "size": 10,
        "quantity": 7
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Forest Green",
        "size": 11,
        "quantity": 13
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Forest Green",
        "size": 12,
        "quantity": 17
    },
    {
        "box_number": 125,
        "style_code": "H1DA0030",
        "color": "Forest Green",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 126,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 10,
        "quantity": 14
    },
    {
        "box_number": 126,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 11,
        "quantity": 14
    },
    {
        "box_number": 126,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 12,
        "quantity": 16
    },
    {
        "box_number": 126,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 13,
        "quantity": 16
    },
    {
        "box_number": 126,
        "style_code": "H1DA0030",
        "color": "Forest Green",
        "size": 10,
        "quantity": 12
    },
    {
        "box_number": 126,
        "style_code": "H1DA0030",
        "color": "Forest Green",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 126,
        "style_code": "H1DA0030",
        "color": "Forest Green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 127,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 128,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 129,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 129,
        "style_code": "H2DA0031",
        "color": "Dark Green",
        "size": 10,
        "quantity": 9
    },
    {
        "box_number": 129,
        "style_code": "H2DA0031",
        "color": "Dark Green",
        "size": 11,
        "quantity": 19
    },
    {
        "box_number": 129,
        "style_code": "H2DA0031",
        "color": "Dark Green",
        "size": 12,
        "quantity": 33
    },
    {
        "box_number": 129,
        "style_code": "H2DA0031",
        "color": "Dark Green",
        "size": 13,
        "quantity": 13
    },
    {
        "box_number": 129,
        "style_code": "H2DA0031",
        "color": "Lotus Root Pin",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 130,
        "style_code": "X1DL2025",
        "color": "Gray Orchid",
        "size": 12,
        "quantity": 14
    },
    {
        "box_number": 130,
        "style_code": "X1DL2025",
        "color": "Gray Orchid",
        "size": 13,
        "quantity": 16
    },
    {
        "box_number": 130,
        "style_code": "X1DL2025",
        "color": "Gray Orchid",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 130,
        "style_code": "X1DL2025",
        "color": "Gray Blue Green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 130,
        "style_code": "X1DL2025",
        "color": "Gray Blue Green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 130,
        "style_code": "X2DL2030",
        "color": "Lotus",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 130,
        "style_code": "X2DL2030",
        "color": "Lotus",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 130,
        "style_code": "X2DL2030",
        "color": "Lotus root color",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 131,
        "style_code": "H2DA0031",
        "color": "Dark Green",
        "size": 11,
        "quantity": 8
    },
    {
        "box_number": 131,
        "style_code": "H2DA0031",
        "color": "Lotus Root Pin",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 131,
        "style_code": "X1DL2025",
        "color": "Gray Orchi",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 131,
        "style_code": "X1DL2025",
        "color": "Gray Blue Green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 131,
        "style_code": "X2DL2030",
        "color": "Gray Blue Green",
        "size": 12,
        "quantity": 18
    },
    {
        "box_number": 131,
        "style_code": "X2DL2030",
        "color": "Gray Blue Green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 131,
        "style_code": "X2DL2030",
        "color": "Cream Brow",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 131,
        "style_code": "X2DL2030",
        "color": "Lotus Root Colo",
        "size": 12,
        "quantity": 20
    },
    {
        "box_number": 131,
        "style_code": "X2DL2030",
        "color": "Lotus Root",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 131,
        "style_code": "X2DL2030",
        "color": "Lotus",
        "size": 14,
        "quantity": 20
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Sapphire Blu",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Blue",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Blue",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Blue",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Big Red",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Fluorescent Green",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 132,
        "style_code": "X1RL1326",
        "color": "Fluorescent Green",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 132,
        "style_code": "XE100053",
        "color": "Gray",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 132,
        "style_code": "XE100053",
        "color": "Khaki",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 132,
        "style_code": "XE100053",
        "color": "Khaki",
        "size": 15,
        "quantity": 9
    },
    {
        "box_number": 132,
        "style_code": "XE100053",
        "color": "Khaki",
        "size": 16,
        "quantity": 9
    },
    {
        "box_number": 133,
        "style_code": "B1BA5023",
        "color": "Blue",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 133,
        "style_code": "B1BA5023",
        "color": "Lotus root pink",
        "size": 14,
        "quantity": 69
    },
    {
        "box_number": 134,
        "style_code": "X0DL2011",
        "color": "yellow",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 134,
        "style_code": "X0DL2011",
        "color": "Pink",
        "size": "",
        "quantity": 4
    },
    {
        "box_number": 134,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 134,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 134,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 134,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 134,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 134,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 134,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 134,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 134,
        "style_code": "X2DL2012",
        "color": "Soybean paste green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 134,
        "style_code": "X2DL2012",
        "color": "Soybean paste green",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 134,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 134,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 134,
        "style_code": "X2DL2012",
        "color": "Sateen Re",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 135,
        "style_code": "XE100053",
        "color": "Gray",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 135,
        "style_code": "XE100053",
        "color": "Gray",
        "size": 16,
        "quantity": 9
    },
    {
        "box_number": 135,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 14,
        "quantity": 12
    },
    {
        "box_number": 135,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 15,
        "quantity": 12
    },
    {
        "box_number": 135,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 16,
        "quantity": 12
    },
    {
        "box_number": 136,
        "style_code": "X0DQX2521",
        "color": "Gold",
        "size": 15,
        "quantity": 18
    },
    {
        "box_number": 136,
        "style_code": "X0DQX2521",
        "color": "Gold",
        "size": 16,
        "quantity": 16
    },
    {
        "box_number": 136,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 136,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 20,
        "quantity": 6
    },
    {
        "box_number": 137,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 137,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 17,
        "quantity": 13
    },
    {
        "box_number": 137,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 20,
        "quantity": 20
    },
    {
        "box_number": 137,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 20,
        "quantity": 6
    },
    {
        "box_number": 138,
        "style_code": "B0RL5053",
        "color": "Navy",
        "size": 16,
        "quantity": 45
    },
    {
        "box_number": 138,
        "style_code": "B0RL5053",
        "color": "Navy",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 138,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 138,
        "style_code": "X0DQX2522",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 138,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 138,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 139,
        "style_code": "H2DA0031",
        "color": "Lotus Root Pink",
        "size": 10,
        "quantity": 18
    },
    {
        "box_number": 139,
        "style_code": "H2DA0031",
        "color": "Lotus Root",
        "size": 11,
        "quantity": 28
    },
    {
        "box_number": 139,
        "style_code": "H2DA0031",
        "color": "Lotus Root",
        "size": 12,
        "quantity": 34
    },
    {
        "box_number": 139,
        "style_code": "H2DA0031",
        "color": "Lotus Root",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 140,
        "style_code": "H2DA0031",
        "color": "Dark Green",
        "size": 10,
        "quantity": 7
    },
    {
        "box_number": 140,
        "style_code": "H2DA0031",
        "color": "Dark Green",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 140,
        "style_code": "H2DA0031",
        "color": "Lotus Root Powder",
        "size": 11,
        "quantity": 14
    },
    {
        "box_number": 140,
        "style_code": "H2DA0031",
        "color": "Lotus Root",
        "size": 12,
        "quantity": 10
    },
    {
        "box_number": 140,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 140,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 140,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 140,
        "style_code": "X2DA1029",
        "color": "Light Green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 140,
        "style_code": "X2DA1029",
        "color": "light gree",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 140,
        "style_code": "X2DA1029",
        "color": "Dark Gra",
        "size": 12,
        "quantity": 12
    },
    {
        "box_number": 140,
        "style_code": "X2DA1029",
        "color": "Dark Gray",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 141,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 141,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 17,
        "quantity": 15
    },
    {
        "box_number": 141,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 141,
        "style_code": "X2RL1327M",
        "color": "Flesh",
        "size": 16,
        "quantity": 11
    },
    {
        "box_number": 141,
        "style_code": "X2RL1327M",
        "color": "Flesh pink",
        "size": 17,
        "quantity": 7
    },
    {
        "box_number": 142,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 142,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 142,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 20,
        "quantity": 9
    },
    {
        "box_number": 142,
        "style_code": "X2RL1327M",
        "color": "Meat Powder",
        "size": 19,
        "quantity": 15
    },
    {
        "box_number": 142,
        "style_code": "X2RL1327M",
        "color": "Flesh pink",
        "size": 20,
        "quantity": 11
    },
    {
        "box_number": 143,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 143,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 22,
        "quantity": 3
    },
    {
        "box_number": 143,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 22,
        "quantity": 34
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 11,
        "quantity": 15
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 12,
        "quantity": 27
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Light Gray",
        "size": 11,
        "quantity": 16
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Light Gray",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Light Gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 144,
        "style_code": "H1DA0023",
        "color": "Light Gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 145,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 145,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 13,
        "quantity": 26
    },
    {
        "box_number": 145,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 14,
        "quantity": 12
    },
    {
        "box_number": 145,
        "style_code": "H1DA0023",
        "color": "Light Gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 145,
        "style_code": "X0DQX2500",
        "color": "Red",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 145,
        "style_code": "X0DQX2500",
        "color": "Soybean Sand Purpl",
        "size": 16,
        "quantity": 13
    },
    {
        "box_number": 145,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 145,
        "style_code": "X2DL2058",
        "color": "Aprico",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 146,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 146,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 146,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 146,
        "style_code": "X0DL2037",
        "color": "Light Gray",
        "size": 23,
        "quantity": 3
    },
    {
        "box_number": 146,
        "style_code": "X0DL2037",
        "color": "Dark Gray",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 146,
        "style_code": "X0DL2037",
        "color": "Dark Gray",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 146,
        "style_code": "X0DL2037",
        "color": "Dark Gray",
        "size": 23,
        "quantity": 6
    },
    {
        "box_number": 146,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 22,
        "quantity": 2
    },
    {
        "box_number": 146,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 22,
        "quantity": 13
    },
    {
        "box_number": 147,
        "style_code": "L0BQ6057",
        "color": "Black/Blue",
        "size": 16,
        "quantity": 49
    },
    {
        "box_number": 148,
        "style_code": "L0BQ6057",
        "color": "Black/Blue",
        "size": 16,
        "quantity": 7
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 18,
        "quantity": 4
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 6
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325M",
        "color": "Dark Gray",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 19,
        "quantity": 5
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 5
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325",
        "color": "Dark Gray",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325",
        "color": "Dark Gray",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 148,
        "style_code": "X1RL1325",
        "color": "Dark Gray",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 15,
        "quantity": 9
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 149,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Soybean Green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Soybean Green",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Sateen",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 150,
        "style_code": "X2DL2012",
        "color": "Satin Red",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 150,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 150,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 20,
        "quantity": 9
    },
    {
        "box_number": 150,
        "style_code": "X2RL1327M",
        "color": "Flesh Pink",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 151,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 11,
        "quantity": 7
    },
    {
        "box_number": 151,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 12,
        "quantity": 21
    },
    {
        "box_number": 151,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 151,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 19,
        "quantity": 9
    },
    {
        "box_number": 151,
        "style_code": "X2RL1327M",
        "color": "Flesh Pink",
        "size": 18,
        "quantity": 14
    },
    {
        "box_number": 151,
        "style_code": "X2RL1327M",
        "color": "Flesh Pink",
        "size": 20,
        "quantity": 3
    },
    {
        "box_number": 152,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 12,
        "quantity": 31
    },
    {
        "box_number": 152,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 15,
        "quantity": 13
    },
    {
        "box_number": 153,
        "style_code": "X0RL1280",
        "color": "Black",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 153,
        "style_code": "X0RL1280",
        "color": "Black",
        "size": 11,
        "quantity": 8
    },
    {
        "box_number": 153,
        "style_code": "X0RL1280",
        "color": "Black",
        "size": 12,
        "quantity": 34
    },
    {
        "box_number": 153,
        "style_code": "X0RL1280",
        "color": "Black",
        "size": 14,
        "quantity": 17
    },
    {
        "box_number": 154,
        "style_code": "X2DA1030",
        "color": "Navy",
        "size": 14,
        "quantity": 38
    },
    {
        "box_number": 154,
        "style_code": "X2DA1030",
        "color": "Navy",
        "size": 15,
        "quantity": 43
    },
    {
        "box_number": 154,
        "style_code": "X2DA1030",
        "color": "Navy",
        "size": 16,
        "quantity": 31
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Butter Green",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Butter Gree",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Lotus",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Lotus Root",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Lotus Root",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Lotus Root",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 155,
        "style_code": "X0DL2015",
        "color": "Lotus Root",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 155,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 155,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 155,
        "style_code": "X2DL2010",
        "color": "Dark Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 156,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 3
    },
    {
        "box_number": 156,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 14,
        "quantity": 16
    },
    {
        "box_number": 156,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 156,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 156,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 156,
        "style_code": "X2DL2011",
        "color": "Sauce Red",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 156,
        "style_code": "X2DL2012",
        "color": "Bean paste green",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 156,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 15
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Soybean paste green",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Soybean paste green",
        "size": 15,
        "quantity": 12
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 15,
        "quantity": 17
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Sateen",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 157,
        "style_code": "X2DL2012",
        "color": "Sand Tea Red",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 158,
        "style_code": "X1DL2007",
        "color": "Apricot",
        "size": 12,
        "quantity": 20
    },
    {
        "box_number": 158,
        "style_code": "X1DL2007",
        "color": "Apricot",
        "size": 13,
        "quantity": 24
    },
    {
        "box_number": 158,
        "style_code": "X1DL2007",
        "color": "Apricot",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 159,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 159,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 159,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 159,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 159,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 13,
        "quantity": 37
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 14,
        "quantity": 24
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 159,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 160,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 160,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 160,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 160,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 160,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 160,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 12,
        "quantity": 10
    },
    {
        "box_number": 160,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 160,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 14,
        "quantity": 17
    },
    {
        "box_number": 160,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 15,
        "quantity": 15
    },
    {
        "box_number": 160,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 16,
        "quantity": 19
    },
    {
        "box_number": 161,
        "style_code": "X0DL2011",
        "color": "yellow",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 161,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 161,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 4
    },
    {
        "box_number": 161,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 10
    },
    {
        "box_number": 161,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 161,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 161,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 161,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 161,
        "style_code": "X2RL1327",
        "color": "Rose Red",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 161,
        "style_code": "X2RL1327",
        "color": "Rose Red",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 161,
        "style_code": "X2RL1327",
        "color": "Rose Red",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 161,
        "style_code": "X2RL1327",
        "color": "Meat powder",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 162,
        "style_code": "B1BA5023",
        "color": "Lotus root starch",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 162,
        "style_code": "B1BA5023",
        "color": "Lotus root starch",
        "size": 14,
        "quantity": 42
    },
    {
        "box_number": 162,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 162,
        "style_code": "X2DA1029",
        "color": "dark gray",
        "size": 13,
        "quantity": 17
    },
    {
        "box_number": 163,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 163,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 17,
        "quantity": 4
    },
    {
        "box_number": 163,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 163,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 17,
        "quantity": 6
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 163,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Royal Blue",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Royal Blue",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Royal Blue",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 15,
        "quantity": 8
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326S",
        "color": "",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 164,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 164,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 164,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 164,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 164,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 165,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 165,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 14,
        "quantity": 12
    },
    {
        "box_number": 165,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 165,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106030",
        "color": "Bean paste color",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 165,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 165,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 165,
        "style_code": "HE106030",
        "color": "Dark blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 166,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 166,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 13,
        "quantity": 16
    },
    {
        "box_number": 166,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 14,
        "quantity": 13
    },
    {
        "box_number": 166,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 15,
        "quantity": 21
    },
    {
        "box_number": 166,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 166,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 166,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 166,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 166,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 166,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 166,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 166,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 167,
        "style_code": "H2DA0026",
        "color": "pink orange",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 167,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 11,
        "quantity": 12
    },
    {
        "box_number": 167,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 12,
        "quantity": 32
    },
    {
        "box_number": 167,
        "style_code": "H2DA0026",
        "color": "Pink",
        "size": 13,
        "quantity": 26
    },
    {
        "box_number": 167,
        "style_code": "H2DA0026",
        "color": "light green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "yellow",
        "size": "",
        "quantity": 3
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "yellow",
        "size": "",
        "quantity": 5
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 6
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 6
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 6
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "Sauce red",
        "size": "",
        "quantity": 2
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 15
    },
    {
        "box_number": 168,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 7
    },
    {
        "box_number": 169,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 169,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 13,
        "quantity": 17
    },
    {
        "box_number": 169,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 169,
        "style_code": "X0DD2500",
        "color": "Navy blue/red",
        "size": 12,
        "quantity": 20
    },
    {
        "box_number": 169,
        "style_code": "X0DQX2500",
        "color": "Bean Paste Purple",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 169,
        "style_code": "X0DQX2500",
        "color": "Navy blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 169,
        "style_code": "X0DQX2500",
        "color": "Navy blue red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 170,
        "style_code": "X0DQX2521",
        "color": "Pink",
        "size": 15,
        "quantity": 24
    },
    {
        "box_number": 170,
        "style_code": "X0DQX2521",
        "color": "Pink",
        "size": 16,
        "quantity": 24
    },
    {
        "box_number": 170,
        "style_code": "X0DQX2521",
        "color": "Golden",
        "size": 13,
        "quantity": 21
    },
    {
        "box_number": 171,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 12,
        "quantity": 8
    },
    {
        "box_number": 171,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 171,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 13,
        "quantity": 27
    },
    {
        "box_number": 171,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 171,
        "style_code": "XT0RL15061",
        "color": "Sapphire",
        "size": 10,
        "quantity": 6
    },
    {
        "box_number": 171,
        "style_code": "XT0RL15061",
        "color": "Meat powder",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 171,
        "style_code": "XT0RL15061",
        "color": "Meat powder",
        "size": 12,
        "quantity": 12
    },
    {
        "box_number": 172,
        "style_code": "H1RQ0563",
        "color": "Navy blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 172,
        "style_code": "X0RQ1718",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 172,
        "style_code": "X0RQ2028",
        "color": "silver gray",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 172,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 172,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 172,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 172,
        "style_code": "X1RL1325M",
        "color": "Black",
        "size": 19,
        "quantity": 5
    },
    {
        "box_number": 172,
        "style_code": "X1RL1325",
        "color": "dark gray",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 172,
        "style_code": "X2DL2058",
        "color": "Apricot",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 172,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 172,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 172,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 172,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 172,
        "style_code": "XE200271",
        "color": "Blue",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 172,
        "style_code": "XE200271",
        "color": "Blue",
        "size": 19,
        "quantity": 13
    },
    {
        "box_number": 173,
        "style_code": "H0DA0163",
        "color": "Black",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "H0DA0163",
        "color": "Gray",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 173,
        "style_code": "H0DA0163",
        "color": "Gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "H0DA0166",
        "color": "White",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "H0DA0166",
        "color": "Fluorescent green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 173,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 19,
        "quantity": 6
    },
    {
        "box_number": 173,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 173,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 17,
        "quantity": 3
    },
    {
        "box_number": 173,
        "style_code": "X1RL1325M",
        "color": "White",
        "size": 20,
        "quantity": 6
    },
    {
        "box_number": 173,
        "style_code": "XE200270",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200270",
        "color": "Blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200270",
        "color": "Purple",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200271",
        "color": "Khaki",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200271",
        "color": "Blue",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 173,
        "style_code": "XE200272",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200272",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200272",
        "color": "Blue",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 173,
        "style_code": "XE200272",
        "color": "Green",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H0DA0111",
        "color": "Black",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H0DA0163",
        "color": "Gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "H1RA0069",
        "color": "Black",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 174,
        "style_code": "H1RA0150",
        "color": "White",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H1RQ0563",
        "color": "Navy blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H1RQ0563",
        "color": "Navy blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H1RQ0563",
        "color": "Navy blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "H2RL0206",
        "color": "Meat powder",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 174,
        "style_code": "W0RQ8027",
        "color": "Blue",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "X1DA1057",
        "color": "light blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "X1RQ1638",
        "color": "dark gray",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 174,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "X2DL2033",
        "color": "Big Red",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "X2DL2033",
        "color": "Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 174,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "X2DL2033",
        "color": "Purple",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 174,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 174,
        "style_code": "X2DL2058",
        "color": "Taro powder",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 174,
        "style_code": "X2DL2058",
        "color": "Taro powder",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 174,
        "style_code": "XE100053",
        "color": "Blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 175,
        "style_code": "X2RL1321",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 175,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 12,
        "quantity": 12
    },
    {
        "box_number": 175,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 13,
        "quantity": 16
    },
    {
        "box_number": 175,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 175,
        "style_code": "X2RL1321",
        "color": "Light green",
        "size": 11,
        "quantity": 6
    },
    {
        "box_number": 175,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 175,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 175,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 18,
        "quantity": 8
    },
    {
        "box_number": 175,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 176,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 176,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 176,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 176,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 176,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 176,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 176,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 15,
        "quantity": 6
    },
    {
        "box_number": 176,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 176,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 176,
        "style_code": "X2RL1327M",
        "color": "Meat powder",
        "size": 16,
        "quantity": 4
    },
    {
        "box_number": 176,
        "style_code": "X2RL1327M",
        "color": "Meat powder",
        "size": 17,
        "quantity": 7
    },
    {
        "box_number": 176,
        "style_code": "X2RL1327M",
        "color": "Meat powder",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 177,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 4
    },
    {
        "box_number": 177,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 15,
        "quantity": 12
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 177,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 178,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 178,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 13,
        "quantity": 26
    },
    {
        "box_number": 178,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 178,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 178,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 179,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 179,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 179,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 179,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 179,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 179,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 179,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 179,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 179,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 179,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 179,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 12,
        "quantity": 11
    },
    {
        "box_number": 179,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 179,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 180,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 181,
        "style_code": "X1DA1057",
        "color": "Gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 181,
        "style_code": "X1DA1057",
        "color": "Navy blue",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "golden",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "Golden",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 10
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 181,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 182,
        "style_code": "H0DA0111",
        "color": "Black",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "H0DA0163",
        "color": "Gray",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 182,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 182,
        "style_code": "H1DA0023",
        "color": "Green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 182,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 182,
        "style_code": "H1DA0023",
        "color": "light gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Big Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Navy blue",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Navy blue",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 182,
        "style_code": "X0DQX2500",
        "color": "Navy blue",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 182,
        "style_code": "X1DA1077",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X1DA1077",
        "color": "light gray",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X1DA1077",
        "color": "light blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X1RL1318",
        "color": "light blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 182,
        "style_code": "X1RL1326",
        "color": "Fluorescent green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 182,
        "style_code": "X1RL1326S",
        "color": "",
        "size": "",
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X1RL1326S",
        "color": "",
        "size": "",
        "quantity": 3
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Big Red",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Big Red",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Big Red",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Big Red",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Pink",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 182,
        "style_code": "X2RQ1652",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 183,
        "style_code": "X1RL1267M",
        "color": "Gray",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 183,
        "style_code": "XE100073",
        "color": "Gray",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 183,
        "style_code": "XE100073",
        "color": "Gray",
        "size": 15,
        "quantity": 12
    },
    {
        "box_number": 183,
        "style_code": "XE100073",
        "color": "Rose Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 183,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 17,
        "quantity": 5
    },
    {
        "box_number": 183,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 18,
        "quantity": 11
    },
    {
        "box_number": 183,
        "style_code": "XE200271",
        "color": "Pink",
        "size": 19,
        "quantity": 13
    },
    {
        "box_number": 184,
        "style_code": "H2DA0026",
        "color": "pink orange",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "H2DA0026",
        "color": "light green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 184,
        "style_code": "HE106030",
        "color": "Bean paste color",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "HE106030",
        "color": "Bean paste color",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 184,
        "style_code": "HE106030",
        "color": "Bean paste color",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "HE106030",
        "color": "Dark blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2080",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2080",
        "color": "Big Red",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2080",
        "color": "light blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2080",
        "color": "Navy/Red",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0DL2085",
        "color": "Navy blue",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0RL1280",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0RL1280",
        "color": "Pink",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 184,
        "style_code": "X0RL1337",
        "color": "Black",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0RL1386",
        "color": "Black",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X0RL1386",
        "color": "Meat powder",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X2BQ1686",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 184,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 184,
        "style_code": "X2RL1327",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X2RL1327",
        "color": "Rose Red",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 184,
        "style_code": "X2RL1327S",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "XE200263",
        "color": "Pink",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "XT0RL15061",
        "color": "Sapphire",
        "size": 10,
        "quantity": 2
    },
    {
        "box_number": 184,
        "style_code": "XT0RL15061",
        "color": "Sapphire",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 184,
        "style_code": "XT0RL15061",
        "color": "Black",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 185,
        "style_code": "H2RA0097",
        "color": "Apricot",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 185,
        "style_code": "X0DL2011",
        "color": "pink",
        "size": "",
        "quantity": 3
    },
    {
        "box_number": 185,
        "style_code": "X0DL2037",
        "color": "Black",
        "size": 18,
        "quantity": 5
    },
    {
        "box_number": 185,
        "style_code": "X0DL2037",
        "color": "dark gray",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 185,
        "style_code": "X0DL2037",
        "color": "dark gray",
        "size": 23,
        "quantity": 6
    },
    {
        "box_number": 185,
        "style_code": "X1DL2017",
        "color": "Bean paste color",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 185,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 5
    },
    {
        "box_number": 185,
        "style_code": "XT0RL15061",
        "color": "Sapphire",
        "size": 10,
        "quantity": 11
    },
    {
        "box_number": 186,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 10,
        "quantity": 2
    },
    {
        "box_number": 186,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 186,
        "style_code": "X1DL2025",
        "color": "Gray Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2025",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 186,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Almond tea",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Almond tea",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Almond tea",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Almond tea",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DA1030",
        "color": "light green",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DA1030",
        "color": "light green",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 186,
        "style_code": "X2DA1030",
        "color": "light green",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 186,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DL2030",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DL2030",
        "color": "Cream Brown",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DL2030",
        "color": "Cream Brown",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "X2DL2030",
        "color": "Lotus color",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 186,
        "style_code": "XE200211",
        "color": "Pink",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 186,
        "style_code": "XE200211",
        "color": "Pink",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 186,
        "style_code": "XE200211",
        "color": "Blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 186,
        "style_code": "XE200221",
        "color": "Ma Hui",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Yellow",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 187,
        "style_code": "XE100039",
        "color": "Blue",
        "size": 16,
        "quantity": 14
    },
    {
        "box_number": 188,
        "style_code": "H2RA0088",
        "color": "Navy blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "H2RA0088",
        "color": "Navy blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "HE106018",
        "color": "Pink",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 188,
        "style_code": "HE106018",
        "color": "Gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "HE106026",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "HE106026",
        "color": "Blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2032",
        "color": "White",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2037",
        "color": "Black",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2037",
        "color": "Black",
        "size": 22,
        "quantity": 2
    },
    {
        "box_number": 188,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2085",
        "color": "Sapphire",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2085",
        "color": "Sapphire",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 23,
        "quantity": 3
    },
    {
        "box_number": 188,
        "style_code": "X0RA1192",
        "color": "Dahon",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X0RL1385",
        "color": "light green",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 188,
        "style_code": "X2RL1328",
        "color": "Dahon",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "X2RL1328",
        "color": "Dahon",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "XE200235",
        "color": "Green",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "XE200253",
        "color": "Dark gray brown",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 188,
        "style_code": "XE200253",
        "color": "Dark gray brown",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 188,
        "style_code": "XE200253",
        "color": "Green light gray",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 188,
        "style_code": "XT0RL15061",
        "color": "Meat powder",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 23,
        "quantity": 2
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 18,
        "quantity": 8
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 19,
        "quantity": 4
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 21,
        "quantity": 6
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 3
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 21,
        "quantity": 6
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 21,
        "quantity": 3
    },
    {
        "box_number": 189,
        "style_code": "X0DL2082",
        "color": "light gray",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 21,
        "quantity": 2
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 21,
        "quantity": 4
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 22,
        "quantity": 3
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Pink",
        "size": 20,
        "quantity": 22
    },
    {
        "box_number": 190,
        "style_code": "X0DL2082",
        "color": "Black",
        "size": 21,
        "quantity": 5
    },
    {
        "box_number": 191,
        "style_code": "X0DL2031",
        "color": "Apricot",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 191,
        "style_code": "X0DL2031",
        "color": "Apricot",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2031",
        "color": "Apricot",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 17,
        "quantity": 14
    },
    {
        "box_number": 191,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 19,
        "quantity": 12
    },
    {
        "box_number": 191,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 21,
        "quantity": 2
    },
    {
        "box_number": 191,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 191,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 191,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 21,
        "quantity": 4
    },
    {
        "box_number": 191,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 23,
        "quantity": 2
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Butter green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Lotus color",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Lotus color",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 192,
        "style_code": "X0DL2015",
        "color": "Lotus color",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 192,
        "style_code": "X0DL2032",
        "color": "White",
        "size": 22,
        "quantity": 6
    },
    {
        "box_number": 192,
        "style_code": "X0DL2032",
        "color": "White",
        "size": 23,
        "quantity": 4
    },
    {
        "box_number": 192,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 192,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 192,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 192,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 192,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 192,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 192,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 193,
        "style_code": "X1DL2025",
        "color": "Gray blue",
        "size": 12,
        "quantity": 4
    },
    {
        "box_number": 193,
        "style_code": "X1DL2025",
        "color": "Gray blue",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 193,
        "style_code": "X1DL2025",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 193,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 193,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 193,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 193,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 193,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 193,
        "style_code": "X1DL2026",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 193,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 12,
        "quantity": 9
    },
    {
        "box_number": 193,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 13,
        "quantity": 9
    },
    {
        "box_number": 193,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 194,
        "style_code": "H1DA0030",
        "color": "blue",
        "size": 10,
        "quantity": 2
    },
    {
        "box_number": 194,
        "style_code": "H1DA0030",
        "color": "Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "H1DA0030",
        "color": "forest green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 10,
        "quantity": 4
    },
    {
        "box_number": 194,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 194,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 10,
        "quantity": 4
    },
    {
        "box_number": 194,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "X1DL2025",
        "color": "Gray blue",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "X1DL2025",
        "color": "Gray blue",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 194,
        "style_code": "X1DL2025",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 194,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 194,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 8
    },
    {
        "box_number": 194,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 194,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 194,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 12,
        "quantity": 5
    },
    {
        "box_number": 194,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 194,
        "style_code": "X2DA1030",
        "color": "light green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "X2DA1030",
        "color": "light green",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 194,
        "style_code": "X2DL2028",
        "color": "Medium Yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 195,
        "style_code": "B1BA5023",
        "color": "Lotus root starch",
        "size": 12,
        "quantity": 51
    },
    {
        "box_number": 195,
        "style_code": "B1BA5023",
        "color": "Lotus root starch",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 195,
        "style_code": "H2DA0031",
        "color": "Dark green",
        "size": 11,
        "quantity": 6
    },
    {
        "box_number": 195,
        "style_code": "H2DA0031",
        "color": "Lotus root starch",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 196,
        "style_code": "B1BA5023",
        "color": "Blue",
        "size": 13,
        "quantity": 69
    },
    {
        "box_number": 196,
        "style_code": "B1BA5023",
        "color": "Lotus root starch",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "B0RL5053",
        "color": "Light pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "B0RL5053",
        "color": "Navy blue",
        "size": 16,
        "quantity": 8
    },
    {
        "box_number": 197,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 197,
        "style_code": "X0DD2500",
        "color": "Bean Paste Purple",
        "size": 16,
        "quantity": 22
    },
    {
        "box_number": 197,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 197,
        "style_code": "X0DD2500",
        "color": "Pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Big Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Bean Paste Purple",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Bean Paste Purple",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Bean Paste Purple",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Pink",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Gray green",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Navy blue red",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2500",
        "color": "Navy blue red",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2521",
        "color": "golden",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2522",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 197,
        "style_code": "X0DQX2522",
        "color": "black",
        "size": 20,
        "quantity": 3
    },
    {
        "box_number": 197,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 15,
        "quantity": 4
    },
    {
        "box_number": 198,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 198,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 198,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 198,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 18,
        "quantity": 8
    },
    {
        "box_number": 198,
        "style_code": "X1RL1325M",
        "color": "Dark gray",
        "size": 20,
        "quantity": 4
    },
    {
        "box_number": 198,
        "style_code": "X1RL1325S",
        "color": "White",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 198,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 198,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 14,
        "quantity": 14
    },
    {
        "box_number": 198,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Gray blue",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Almond tea",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Almond tea",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Almond tea",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 199,
        "style_code": "X1DL2026",
        "color": "Medium Yellow",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 199,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 199,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 199,
        "style_code": "X2DA1029",
        "color": "dark gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 199,
        "style_code": "X2DA1029",
        "color": "dark gray",
        "size": 12,
        "quantity": 17
    },
    {
        "box_number": 199,
        "style_code": "X2DL2028",
        "color": "Gray blue",
        "size": 12,
        "quantity": 11
    },
    {
        "box_number": 199,
        "style_code": "X2DL2028",
        "color": "Gray blue",
        "size": 13,
        "quantity": 11
    },
    {
        "box_number": 199,
        "style_code": "X2DL2028",
        "color": "Gray Blue",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 199,
        "style_code": "X2DL2028",
        "color": "Medium Yellow",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 200,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 200,
        "style_code": "X1DL2007",
        "color": "Gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 200,
        "style_code": "X1DL2007",
        "color": "Apricot",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 200,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 200,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 14,
        "quantity": 7
    },
    {
        "box_number": 200,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 200,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Green bean paste",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 14,
        "quantity": 12
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Yellow",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 200,
        "style_code": "X2DL2012",
        "color": "Shacha red",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 201,
        "style_code": "X0DL2085",
        "color": "Pink",
        "size": 22,
        "quantity": 3
    },
    {
        "box_number": 201,
        "style_code": "X0DL2085",
        "color": "Navy blue",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 201,
        "style_code": "X0RL1280",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 201,
        "style_code": "X0RL1280",
        "color": "Black",
        "size": 15,
        "quantity": 13
    },
    {
        "box_number": 201,
        "style_code": "X0RL1280",
        "color": "Black",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 201,
        "style_code": "X0RL1280",
        "color": "Black",
        "size": 17,
        "quantity": 7
    },
    {
        "box_number": 201,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 201,
        "style_code": "X2DL2010",
        "color": "Green bean paste",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 201,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 16,
        "quantity": 5
    },
    {
        "box_number": 201,
        "style_code": "X2RL1328",
        "color": "Dahon",
        "size": 14,
        "quantity": 4
    },
    {
        "box_number": 201,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 201,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 201,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 202,
        "style_code": "H1DA0030",
        "color": "forest green",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 202,
        "style_code": "X1DL2025",
        "color": "Gray blue",
        "size": 12,
        "quantity": 7
    },
    {
        "box_number": 202,
        "style_code": "X1DL2025",
        "color": "Gray blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 202,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 202,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 202,
        "style_code": "X1DL2025",
        "color": "Gray blue green",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 202,
        "style_code": "XE200211",
        "color": "Pink",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 202,
        "style_code": "XE200211",
        "color": "Pink",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 202,
        "style_code": "XE200221",
        "color": "Ma Hui",
        "size": 15,
        "quantity": 5
    },
    {
        "box_number": 202,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 13,
        "quantity": 5
    },
    {
        "box_number": 202,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 14,
        "quantity": 19
    },
    {
        "box_number": 202,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 16,
        "quantity": 17
    },
    {
        "box_number": 203,
        "style_code": "HE106030",
        "color": "dark blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 18,
        "quantity": 3
    },
    {
        "box_number": 203,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 203,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2031",
        "color": "Navy blue",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2080",
        "color": "Big Red",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2080",
        "color": "Big Red",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2080",
        "color": "Pink",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2080",
        "color": "light blue",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2080",
        "color": "light blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2080",
        "color": "Navy blue",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X0DL2082",
        "color": "White",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 203,
        "style_code": "X0DL2082",
        "color": "Big Red",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X1DL2007",
        "color": "Apricot",
        "size": 13,
        "quantity": 10
    },
    {
        "box_number": 203,
        "style_code": "X2DL2010",
        "color": "Dark pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X2RL1321",
        "color": "Light gray",
        "size": 13,
        "quantity": 3
    },
    {
        "box_number": 203,
        "style_code": "X2RL1321",
        "color": "Light green",
        "size": 10,
        "quantity": 5
    },
    {
        "box_number": 203,
        "style_code": "X2RL1327",
        "color": "Black",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 203,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 18,
        "quantity": 6
    },
    {
        "box_number": 203,
        "style_code": "X2RL1327M",
        "color": "Meat powder",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 203,
        "style_code": "X2RL1328",
        "color": "Dahon",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 203,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 203,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X0DL2037",
        "color": "Pink",
        "size": 22,
        "quantity": 3
    },
    {
        "box_number": 204,
        "style_code": "X0DL2037",
        "color": "Black",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X0DL2037",
        "color": "Black",
        "size": 23,
        "quantity": 17
    },
    {
        "box_number": 204,
        "style_code": "X0RL1391",
        "color": "Dahong",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 22,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X0RL1391",
        "color": "Light coffee",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 204,
        "style_code": "X1DL2017",
        "color": "Bean paste color",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 204,
        "style_code": "X1DL2017",
        "color": "Bean paste color",
        "size": 14,
        "quantity": 8
    },
    {
        "box_number": 204,
        "style_code": "X1DL2017",
        "color": "Navy blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 204,
        "style_code": "X2RL1321",
        "color": "Light green",
        "size": 10,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X1RL1325S",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Royal Blue",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Royal Blue",
        "size": 14,
        "quantity": 10
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Royal Blue",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Sapphire",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Sapphire",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 13,
        "quantity": 2
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X1RL1326",
        "color": "Dahon",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 205,
        "style_code": "X2DL2057",
        "color": "Pink",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X2DL2057",
        "color": "Pink",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 205,
        "style_code": "X2DL2057",
        "color": "Yellow",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 205,
        "style_code": "X2DL2057",
        "color": "Apricot",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 205,
        "style_code": "X2DL2058",
        "color": "Pink",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 205,
        "style_code": "X2DL2058",
        "color": "Apricot",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 205,
        "style_code": "X2DL2058",
        "color": "Taro powder",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X2DL2058",
        "color": "Taro powder",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 205,
        "style_code": "X2DL2058",
        "color": "Taro powder",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 205,
        "style_code": "X2DL2058",
        "color": "Taro powder",
        "size": 15,
        "quantity": 3
    },
    {
        "box_number": 205,
        "style_code": "X2DL2058",
        "color": "Apricot",
        "size": 16,
        "quantity": 2
    },
    {
        "box_number": 206,
        "style_code": "XE200221",
        "color": "Ma Hui",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 206,
        "style_code": "Y0731",
        "color": "Pink",
        "size": 12,
        "quantity": 49
    },
    {
        "box_number": 207,
        "style_code": "X0DL2053",
        "color": "Pink",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X0DL2053",
        "color": "Apricot",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X2DL2011",
        "color": "Pink",
        "size": 12,
        "quantity": 2
    },
    {
        "box_number": 207,
        "style_code": "X2DL2011",
        "color": "Yellow",
        "size": 13,
        "quantity": 14
    },
    {
        "box_number": 207,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X2DL2011",
        "color": "Sauce red",
        "size": 15,
        "quantity": 14
    },
    {
        "box_number": 207,
        "style_code": "X2RL1321",
        "color": "Light green",
        "size": 10,
        "quantity": 10
    },
    {
        "box_number": 207,
        "style_code": "X2RL1321",
        "color": "Light green",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X2RL1327M",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X2RL1327M",
        "color": "Meat powder",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 207,
        "style_code": "X2RL1328",
        "color": "Pink",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 207,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 12,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 14,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 207,
        "style_code": "X2RL1328",
        "color": "Black",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 208,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 11,
        "quantity": 9
    },
    {
        "box_number": 208,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 12,
        "quantity": 3
    },
    {
        "box_number": 208,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 13,
        "quantity": 15
    },
    {
        "box_number": 208,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 14,
        "quantity": 13
    },
    {
        "box_number": 208,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 15,
        "quantity": 11
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "Dark gray",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "Dark gray",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "Dark gray",
        "size": 18,
        "quantity": 5
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "Dark gray",
        "size": 19,
        "quantity": 5
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 14,
        "quantity": 2
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "Black",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 18,
        "quantity": 2
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X1RL1325",
        "color": "White",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X1PQ1029",
        "color": "Orange",
        "size": 14,
        "quantity": 11
    },
    {
        "box_number": 209,
        "style_code": "X1PQ1029",
        "color": "Orange",
        "size": 16,
        "quantity": 6
    },
    {
        "box_number": 209,
        "style_code": "H1DA0030",
        "color": "Yellow",
        "size": 11,
        "quantity": 2
    },
    {
        "box_number": 209,
        "style_code": "H1DA0030",
        "color": "Yellow",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Dahon",
        "size": 16,
        "quantity": 3
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Dahon",
        "size": 17,
        "quantity": 2
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Dahon",
        "size": 18,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Dahon",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Dahong",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Black",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Black",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 209,
        "style_code": "X0RL1337",
        "color": "Gray",
        "size": 13,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 12,
        "quantity": 6
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 13,
        "quantity": 7
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Gold",
        "size": 15,
        "quantity": 2
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 13,
        "quantity": 6
    },
    {
        "box_number": 210,
        "style_code": "X2DL2013",
        "color": "Silver",
        "size": 14,
        "quantity": 3
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 19,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Gray",
        "size": 20,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Dahon",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Dahon",
        "size": 19,
        "quantity": 3
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Dahong",
        "size": 20,
        "quantity": 2
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Dahon",
        "size": 21,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Dahong",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Light coffee",
        "size": 15,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Light coffee",
        "size": 17,
        "quantity": 1
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Qianka",
        "size": 19,
        "quantity": 2
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Light coffee",
        "size": 20,
        "quantity": 3
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Qianka",
        "size": 21,
        "quantity": 2
    },
    {
        "box_number": 210,
        "style_code": "X0RL1391",
        "color": "Light Coffee",
        "size": 23,
        "quantity": 1
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 12,
        "quantity": 18
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "Pink",
        "size": 13,
        "quantity": 17
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "light green",
        "size": 11,
        "quantity": 4
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "light green",
        "size": 12,
        "quantity": 17
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "light green",
        "size": 13,
        "quantity": 17
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "dark gray",
        "size": 11,
        "quantity": 3
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "dark gray",
        "size": 12,
        "quantity": 18
    },
    {
        "box_number": 211,
        "style_code": "X2DA1029",
        "color": "dark gray",
        "size": 13,
        "quantity": 19
    },
    {
        "box_number": 211,
        "style_code": "X2DA1030",
        "color": "Pink",
        "size": 13,
        "quantity": 4
    },
    {
        "box_number": 212,
        "style_code": "XE200211",
        "color": "Pink",
        "size": 16,
        "quantity": 1
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "Ma Hui",
        "size": 14,
        "quantity": 5
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "Ma Hui",
        "size": 15,
        "quantity": 7
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "Ma Hui",
        "size": 16,
        "quantity": 8
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "Ma Hui",
        "size": 17,
        "quantity": 7
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "light blue",
        "size": 14,
        "quantity": 9
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "light blue",
        "size": 15,
        "quantity": 15
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "light blue",
        "size": 16,
        "quantity": 11
    },
    {
        "box_number": 212,
        "style_code": "XE200221",
        "color": "light blue",
        "size": 17,
        "quantity": 8
    },
    {
        "box_number": 213,
        "style_code": "X0DL2015",
        "color": "stamen powder",
        "size": 11,
        "quantity": 19
    },
    {
        "box_number": 213,
        "style_code": "X0DL2015",
        "color": "stamen powder",
        "size": 12,
        "quantity": 11
    },
    {
        "box_number": 213,
        "style_code": "X0DL2015",
        "color": "stamen powder",
        "size": 14,
        "quantity": 6
    },
    {
        "box_number": 213,
        "style_code": "X0DL2015",
        "color": "stamen powder",
        "size": 15,
        "quantity": 10
    },
    {
        "box_number": 213,
        "style_code": "X0DL2015",
        "color": "Gray",
        "size": 11,
        "quantity": 1
    },
    {
        "box_number": 213,
        "style_code": "X0DL2015",
        "color": "Moran",
        "size": 11,
        "quantity": 1
    }
]

const toggleButton = document.getElementById("toggleButton");
const articlesDiv = document.getElementById("articles");
articlesDiv.style.display = "none"
toggleButton.addEventListener("click", () => {
    if (articlesDiv.style.display === "none") {
        articlesDiv.style.display = "block";
        toggleButton.textContent = "Hide Articles";
        document.querySelector('#toggleButton').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        articlesDiv.style.display = "none";
        toggleButton.textContent = "Show Articles";
    }
});

let styleCodeInput1 = localStorage.getItem('styleCodeInput1') || 1
let styleCodeInput2 = localStorage.getItem('styleCodeInput2') || 213
let styleCodeInput3 = localStorage.getItem('styleCodeInput3') || 1
let styleCodeInput4 = localStorage.getItem('styleCodeInput4') || 213
let styleCodeInput5 = localStorage.getItem('styleCodeInput5') || 1
let styleCodeInput6 = localStorage.getItem('styleCodeInput6') || 213

const totalQuantity = datas.reduce((total, entry) => {
    if (entry.box_number >= styleCodeInput5 && entry.box_number <= styleCodeInput6) {
        return total + entry.quantity;
    }
    return total;
}, 0);

document.getElementById('detailscomplete').textContent = `${styleCodeInput3} to ${styleCodeInput4}`
document.getElementById('detailscompletefull').textContent = `${styleCodeInput1} to ${styleCodeInput2}`
document.getElementById('detailscompletefull6').textContent = ` ${styleCodeInput5} to ${styleCodeInput6} : ${totalQuantity}`

const excludedStyleCodes = (Object.keys(JSON.parse(localStorage.getItem('articleActions'))));
let filteredData = datas.filter(item => item.box_number >= styleCodeInput1 && item.box_number <= styleCodeInput2 && !excludedStyleCodes.includes(item.style_code));

let data = filteredData




// Function to find fully covered articles in box numbers 1 to 60
function findFullyCoveredArticles(data) {
    // Group data by style_code
    const articles = {};
    data.forEach(item => {
        if (!articles[item.style_code]) {
            articles[item.style_code] = new Set();
        }
        articles[item.style_code].add(item.box_number);
    });

    const fullyCoveredArticles = [];
    for (const [styleCode, boxNumbers] of Object.entries(articles)) {
        const isFullyCovered = [...boxNumbers].every(box => box >= styleCodeInput3 && box <= styleCodeInput4);
        if (isFullyCovered) {
            fullyCoveredArticles.push(styleCode);
        }
    }

    return fullyCoveredArticles;
}

const result = findFullyCoveredArticles(datas);
document.getElementById('detailscompletearray').innerHTML = result.map(e => ' ' + e + ' ')

const uniqueStyleCodes = [...new Set(data.map(item => item.style_code))].sort();
const uniqueBoxNumber = [...new Set(data.map(item => item.box_number))].sort((a, b) => a - b); // Numerical sort
const AllArticleQuantity = uniqueStyleCodes.map(styleCode => {
    return data
        .filter(item => item.style_code === styleCode) // Filter items with the same style code
        .reduce((sum, item) => sum + item.quantity, 0); // Sum their quantities
});

const AllBoxQuantity = uniqueBoxNumber.map(styleCode => {
    return data
        .filter(item => item.box_number === styleCode) // Filter items with the same style code
        .reduce((sum, item) => sum + item.quantity, 0); // Sum their quantities
});
const accordion = document.getElementById("accordion");
const accordions = document.getElementById("accordions");
function createAccordionSection(title, quan, items, data) {
    // Create accordion item container
    const section = document.createElement("div");
    section.classList.add("accordion-item");

    // Create accordion header
    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.textContent = title;

    section.appendChild(header);

    // Create accordion content
    const content = document.createElement("div");
    content.classList.add("accordion-content");

    // Loop through items and display the box number and other details
    items.forEach((item, index) => {

        // Find matching box data for the current item
        const boxInfo = data.filter(data => data.style_code === item);

        const uniqueBoxNumbers = [...new Set(boxInfo.map(data => data.box_number))];
        uniqueBoxNumbers.sort((a, b) => a - b);


        // Create the line for displaying item details
        const line = document.createElement("div");
        line.style.display = "flex";
        line.style.alignItems = "center";
        line.style.justifyContent = "space-between";
        line.style.margin = "auto";
        line.style.width = "1100px";

        // Text for the item (S.no)
        const textSno = document.createElement("span");
        textSno.textContent = index + 1;
        textSno.style.width = '50px';

        // Text for the item (style code)
        const text = document.createElement("span");
        text.textContent = item;
        text.style.width = '110px';

        // Text for the quantity
        const textQuantity = document.createElement("span");
        textQuantity.textContent = quan[index];
        textQuantity.style.width = '50px';
        textQuantity.style.marginLeft = '20px';

        // Create the Box Number display
        const boxNumber = document.createElement("span");
        // boxNumber.textContent = Array.from(uniqueBoxNumbers).join(",");
        // Get the string of box numbers
        let boxText = Array.from(uniqueBoxNumbers).join(",");

        // Create a new string where only the commas are wrapped in a span
        let coloredText = boxText.replace(/,/g, '<span class="abc">,</span>');

        // Set the innerHTML of the boxNumber element to the colored text
        boxNumber.innerHTML = coloredText;

        boxNumber.style.width = '800px';
        boxNumber.style.overflow = 'auto';
        boxNumber.style.marginLeft = '20px';


        // Copy button for the item
        const copyButton = document.createElement("button");
        copyButton.textContent = "Show";
        copyButton.classList.add("copy-button");
        copyButton.style.marginLeft = "10px";
        copyButton.style.marginTop = "10px";
        copyButton.addEventListener("click", () => {
            document.getElementById("styleCodeInput").value = item;
            generateTable();
            document.querySelector('#container').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

        // Append the created elements to the line
        line.appendChild(textSno);
        line.appendChild(text);
        line.appendChild(textQuantity);
        line.appendChild(boxNumber);
        line.appendChild(copyButton);

        // Add the line to the content
        content.appendChild(line);
        if (index < items.length - 1) {
            line.style.borderBottom = '1px solid black'

        }
    });

    // Append the content to the section
    section.appendChild(content);

    // Toggle visibility on header click
    header.addEventListener("click", () => {
        if (content.style.display === "block") {
            content.style.display = "none";
            document.querySelector('#container').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            content.style.display = "block";
            document.querySelector('#accordion').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            }); // Reset scroll to the top of the content
        }
    });

    return section;
}
function createAccordionSections(title, quan, items, data) {
    // Create accordion item container
    const section = document.createElement("div");
    section.classList.add("accordions-item");

    // Create accordion header
    const header = document.createElement("div");
    header.classList.add("accordions-header");
    header.textContent = title;

    section.appendChild(header);

    // Create accordion content
    const content = document.createElement("div");
    content.classList.add("accordions-content");
    // Populate content with items
    items.forEach((item, index) => {

        const boxInfo = data.filter(data => data.box_number === item);
        const uniqueBoxNumbers = new Set(boxInfo.map(data => data.style_code));

        const line = document.createElement("div");
        line.style.display = "flex";
        line.style.alignItems = "center";
        line.style.justifyContent = "space-between";
        line.style.margin = "auto";
        line.style.width = "1100px";


        // Text for the item
        const text = document.createElement("span");
        text.style.width = '50px'
        text.textContent = item;

        const textQun = document.createElement("span");
        textQun.style.width = '50px'
        textQun.textContent = quan[index];

        const boxNumber = document.createElement("span");
        // boxNumber.textContent = Array.from(uniqueBoxNumbers).join(",");
        let boxText = Array.from(uniqueBoxNumbers).join(",");

        // Create a new string where only the commas are wrapped in a span
        let coloredText = boxText.replace(/,/g, '<span class="abc">,</span>');

        // Set the innerHTML of the boxNumber element to the colored text
        boxNumber.innerHTML = coloredText;

        boxNumber.style.width = '800px';
        boxNumber.style.overflow = 'auto';
        boxNumber.style.marginLeft = '20px';
        // Copy button for the item
        const copyButton = document.createElement("button");
        copyButton.textContent = "Show";
        copyButton.classList.add("copy-button");
        copyButton.style.marginLeft = "10px";
        copyButton.style.marginTop = "10px";
        copyButton.addEventListener("click", () => {

            document.getElementById("styleCodeInputbox").value = item
            generateTablebox()
            document.querySelector('#containerbox').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        });
        line.appendChild(text);
        line.appendChild(textQun);
        line.appendChild(boxNumber);
        line.appendChild(copyButton);
        content.appendChild(line);
        if (index < items.length - 1) {
            line.style.borderBottom = '1px solid black'

        }
    });

    section.appendChild(content);

    // Toggle visibility on header click
    header.addEventListener("click", () => {
        if (content.style.display === "block") {
            content.style.display = "none";
            document.querySelector('#containerbox').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        } else {
            content.style.display = "block";
            document.querySelector('#accordions').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Reset scroll to the top of the content
        }
    });

    return section;
}
accordion.appendChild(createAccordionSection("Art No.", AllArticleQuantity, uniqueStyleCodes, data));
accordions.appendChild(createAccordionSections("Box.", AllBoxQuantity, uniqueBoxNumber, data));

function Reset() {
    document.getElementById('styleCodeInput').value = ''

}
function Resetbox() {
    document.getElementById('styleCodeInputbox').value = ''


}
function generateTable() {
    const styleCode = document.getElementById("styleCodeInput").value.trim();
    if (!styleCode) {
        alert("Please enter a style code.");
        return;
    }

    // Filter data for the given style code
    const filteredData = data.filter(item => item.style_code.toLowerCase() === styleCode.toLowerCase());

    const filteredDatas = data.filter(item => item.style_code.toLowerCase() === styleCode.toLowerCase()).sort((a, b) => a.color.localeCompare(b.color));

    const tableBody = document.getElementById('resultTable').querySelector('tbody');
    tableBody.innerHTML = ""; // Clear previous results

    if (filteredDatas.length === 0) {
        const row = tableBody.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 4;
        cell.textContent = "No data found.";
        cell.style.textAlign = "center";
    } else {
        filteredDatas.forEach(item => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = item.box_number;
            row.insertCell(1).textContent = item.color;
            row.insertCell(2).textContent = item.size;
            row.insertCell(3).textContent = item.quantity;
        });
    }

    if (filteredData.length === 0) {
        alert("No data found for the entered style code.");
        return;
    }

    // Group data by color and size
    const groupedData = {};
    filteredData.forEach(item => {
        if (!groupedData[item.color]) {
            groupedData[item.color] = {};
        }
        if (!groupedData[item.color][item.size]) {
            groupedData[item.color][item.size] = 0;
        }
        groupedData[item.color][item.size] += item.quantity;
    });

    const sizes = [...new Set(filteredData.map(item => item.size))].sort((a, b) => a - b);

    const sizeTotals = {}; // Total for each size
    let grandTotal = 0; // Grand total for all sizes

    sizes.forEach(size => {
        sizeTotals[size] = 0;
        Object.keys(groupedData).forEach(color => {
            sizeTotals[size] += groupedData[color][size] || 0;
        });
        grandTotal += sizeTotals[size];
    });

    // Create table dynamically
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.textContent = styleCode.toUpperCase();
    headerRow.appendChild(headerCell);

    sizes.forEach(size => {
        const sizeCell = document.createElement("th");
        sizeCell.textContent = size;
        headerRow.appendChild(sizeCell);
    });

    const totalHeaderCell = document.createElement("th");
    totalHeaderCell.textContent = "Total";
    headerRow.appendChild(totalHeaderCell);
    table.appendChild(headerRow);

    // Add rows for each color
    Object.keys(groupedData).forEach(color => {
        const row = document.createElement("tr");
        const colorCell = document.createElement("td");
        colorCell.textContent = color;
        row.appendChild(colorCell);

        let colorTotal = 0; // Total for this color
        sizes.forEach(size => {
            const quantityCell = document.createElement("td");
            const quantity = groupedData[color][size] || 0;
            quantityCell.textContent = quantity;
            row.appendChild(quantityCell);
            colorTotal += quantity;
        });

        const colorTotalCell = document.createElement("td");
        colorTotalCell.textContent = colorTotal;
        row.appendChild(colorTotalCell);

        table.appendChild(row);
    });

    // Add last row for totals
    const totalRow = document.createElement("tr");
    const totalLabelCell = document.createElement("td");
    totalLabelCell.textContent = "Total";
    totalLabelCell.colSpan = sizes.length + 1
    totalRow.appendChild(totalLabelCell);

    const grandTotalCell = document.createElement("td");
    grandTotalCell.textContent = grandTotal;
    totalRow.appendChild(grandTotalCell);

    table.appendChild(totalRow);

    // Display the table
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous table
    tableContainer.appendChild(table);
}
function generateTablebox() {
    const boxNumber = document.getElementById("styleCodeInputbox").value; // Change to boxNumber
    if (!boxNumber) {
        alert("Please enter a box number.");
        return;
    }

    // Filter data for the given box number
    const filteredData = data.filter(item => item.box_number === parseInt(boxNumber)); // Parse input as integer
    const filteredDatas = data.filter(item => item.box_number === parseInt(boxNumber)).sort();

    const tableBody = document.getElementById('resultTablebox').querySelector('tbody');
    tableBody.innerHTML = ""; // Clear previous results

    if (filteredDatas.length === 0) {
        const row = tableBody.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 4;
        cell.textContent = "No data found.";
        cell.style.textAlign = "center";
    } else {
        filteredDatas.forEach(item => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = item.style_code;
            row.insertCell(1).textContent = item.color;
            row.insertCell(2).textContent = item.size;
            row.insertCell(3).textContent = item.quantity;
        });
    }

    if (filteredData.length === 0) {
        alert("No data found for the entered box number.");
        return;
    }

    // Group data by color and size
    const groupedData = {};
    filteredData.forEach(item => {
        if (!groupedData[item.color]) {
            groupedData[item.color] = {};
        }
        if (!groupedData[item.color][item.size]) {
            groupedData[item.color][item.size] = 0;
        }
        groupedData[item.color][item.size] += item.quantity;
    });

    const sizes = [...new Set(filteredData.map(item => item.size))].sort((a, b) => a - b);

    const sizeTotals = {}; // Total for each size
    let grandTotal = 0; // Grand total for all sizes

    sizes.forEach(size => {
        sizeTotals[size] = 0;
        Object.keys(groupedData).forEach(color => {
            sizeTotals[size] += groupedData[color][size] || 0;
        });
        grandTotal += sizeTotals[size];
    });

    // Create table dynamically
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.textContent = `Box Number: ${boxNumber.toUpperCase()}`; // Update title to Box Number
    headerRow.appendChild(headerCell);

    sizes.forEach(size => {
        const sizeCell = document.createElement("th");
        sizeCell.textContent = size;
        headerRow.appendChild(sizeCell);
    });

    const totalHeaderCell = document.createElement("th");
    totalHeaderCell.textContent = "Total";
    headerRow.appendChild(totalHeaderCell);
    table.appendChild(headerRow);

    // Add rows for each color
    Object.keys(groupedData).forEach(color => {
        const row = document.createElement("tr");
        const colorCell = document.createElement("td");
        colorCell.textContent = color;
        row.appendChild(colorCell);

        let colorTotal = 0; // Total for this color
        sizes.forEach(size => {
            const quantityCell = document.createElement("td");
            const quantity = groupedData[color][size] || 0;
            quantityCell.textContent = quantity;
            row.appendChild(quantityCell);
            colorTotal += quantity;
        });

        const colorTotalCell = document.createElement("td");
        colorTotalCell.textContent = colorTotal;
        row.appendChild(colorTotalCell);

        table.appendChild(row);
    });

    // Add last row for totals
    const totalRow = document.createElement("tr");
    const totalLabelCell = document.createElement("td");
    totalLabelCell.textContent = "Total";
    totalLabelCell.colSpan = sizes.length + 1;
    totalRow.appendChild(totalLabelCell);

    const grandTotalCell = document.createElement("td");
    grandTotalCell.textContent = grandTotal;
    totalRow.appendChild(grandTotalCell);

    table.appendChild(totalRow);

    // Display the table
    const tableContainer = document.getElementById("tableContainerbox");
    tableContainer.innerHTML = ""; // Clear previous table
    tableContainer.appendChild(table);
}
document.getElementById("styleCodeInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateTable(); // Call the function when Enter is pressed
    }
});
document.getElementById("styleCodeInputbox").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateTablebox(); // Call the function when Enter is pressed
    }
});
const scrollToTopButton = document.getElementById("scrollToToptop");
const refresh = document.getElementById("refresh");

window.addEventListener("scroll", () => {
    if (window.scrollY > 220) {
        scrollToTopButton.style.display = "flex"; // Show the button
    } else {
        scrollToTopButton.style.display = "none"; // Hide the button
    }
});
// Add click event to the button
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});
refresh.addEventListener("click", () => {
    location.reload()
});
function container() {
    // Get the content of the container div
    var divContents = document.getElementById("printArt").innerHTML;

    // Open a new window for printing
    var printWindow = window.open();

    // Write the HTML structure for the print window
    printWindow.document.write('<html><head><title>Print</title>');

    // Add necessary CSS to ensure borders and other styles are applied
    printWindow.document.write('<style>');
    printWindow.document.write('table {border-collapse: collapse; width: 100%;}'); // Ensure the table has proper width and border collapse
    printWindow.document.write('table td, table th {border: 1px solid black; padding: 5px; text-align: center;}'); // Proper borders and padding
    printWindow.document.write('</style>');

    // Write the content of the div to be printed
    printWindow.document.write('</head><body>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');

    // Close the document and trigger the print dialog
    printWindow.document.close();
    printWindow.print();
}
function containerbox() {
    // Get the content of the container div
    var divContents = document.getElementById("PrintBox").innerHTML;

    // Open a new window for printing
    var printWindow = window.open();

    // Write the HTML structure for the print window
    printWindow.document.write('<html><head><title>Print</title>');

    // Add necessary CSS to ensure borders and other styles are applied
    printWindow.document.write('<style>');
    printWindow.document.write('table {border-collapse: collapse; width: 100%;}'); // Ensure the table has proper width and border collapse
    printWindow.document.write('table td, table th {border: 1px solid black; padding: 5px; text-align: center;}'); // Proper borders and padding
    printWindow.document.write('</style>');

    // Write the content of the div to be printed
    printWindow.document.write('</head><body>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');

    // Close the document and trigger the print dialog
    printWindow.document.close();
    printWindow.print();
}

const uniqueArticles = Array.from(
    datas.reduce((map, article) => {
        map.set(article.style_code, article);
        return map;
    }, new Map()).values()
);

const localStorageKey = "articleActions";
let storedActions = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const styleCodes = Object.keys(storedActions);


function renderArticles() {
    const articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = "";

    uniqueArticles.forEach((article, index) => {
        const articleDiv = document.createElement("div");
        articleDiv.className = "article";

        const articleInfo = document.createElement("div");
        articleInfo.textContent = `${index + 1} , Style Code: ${article.style_code}`;

        const button = document.createElement("button");
        const isDeleted = storedActions[article.style_code]?.action === "delete";

        button.textContent = isDeleted ? "Add" : "Delete";
        button.className = `button ${isDeleted ? "add" : "delete"}`;
        button.addEventListener("click", () => toggleAction(article.style_code, isDeleted));

        articleDiv.appendChild(articleInfo);
        articleDiv.appendChild(button);

        articlesContainer.appendChild(articleDiv);
    });
}

function toggleAction(styleCode, isDeleted) {
    if (isDeleted) {
        delete storedActions[styleCode];
    } else {
        storedActions[styleCode] = { action: "delete" };
    }
    localStorage.setItem(localStorageKey, JSON.stringify(storedActions));
    renderArticles();
}

renderArticles();