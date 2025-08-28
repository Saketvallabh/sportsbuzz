const dummyScoreCard = {
  M1: {
    matchId: "M1",
    matchTitle: "Chennai Super Kings vs Mumbai Indians",
    status: "MI won by 7 wickets",
    innings: [
      {
        team: "Mumbai Indians",
        score: "178/7 (20)",
        batsmen: [
          { name: "Rohit Sharma", runs: 56, balls: 34, fours: 7, sixes: 2, strikeRate: "164.7" },
          { name: "Ishan Kishan", runs: 38, balls: 27, fours: 5, sixes: 1, strikeRate: "140.7" },
          { name: "Suryakumar Yadav", runs: 25, balls: 18, fours: 3, sixes: 1, strikeRate: "138.8" },
          { name: "Tilak Varma", runs: 12, balls: 15, fours: 1, sixes: 0, strikeRate: "80.0" },
          { name: "Tim David", runs: 18, balls: 10, fours: 1, sixes: 1, strikeRate: "180.0" },
          { name: "Hardik Pandya", runs: 10, balls: 8, fours: 0, sixes: 1, strikeRate: "125.0" },
          { name: "Jasprit Bumrah", runs: 5, balls: 6, fours: 0, sixes: 0, strikeRate: "83.3" },
          { name: "Piyush Chawla", runs: 3, balls: 2, fours: 0, sixes: 0, strikeRate: "150.0" }
        ],
        bowlers: [
          { name: "Deepak Chahar", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Ravindra Jadeja", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Matheesha Pathirana", overs: 4, runs: 36, wickets: 2, economy: 9.0 },
          { name: "Moeen Ali", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Tushar Deshpande", overs: 4, runs: 40, wickets: 1, economy: 10.0 }
        ]
      },
      {
        team: "Chennai Super Kings",
        score: "180/3 (18.5)",
        batsmen: [
          { name: "Ruturaj Gaikwad", runs: 78, balls: 45, fours: 8, sixes: 3, strikeRate: "173.3" },
          { name: "Devon Conway", runs: 40, balls: 28, fours: 5, sixes: 1, strikeRate: "142.8" },
          { name: "Shivam Dube", runs: 25, balls: 15, fours: 2, sixes: 1, strikeRate: "166.7" },
          { name: "MS Dhoni", runs: 22, balls: 12, fours: 2, sixes: 1, strikeRate: "183.3" },
          { name: "Ravindra Jadeja", runs: 8, balls: 7, fours: 0, sixes: 0, strikeRate: "114.3" }
        ],
        bowlers: [
          { name: "Jasprit Bumrah", overs: 4, runs: 28, wickets: 1, economy: 7.0 },
          { name: "Piyush Chawla", overs: 3.5, runs: 40, wickets: 0, economy: 10.4 },
          { name: "Hardik Pandya", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Jason Behrendorff", overs: 4, runs: 35, wickets: 1, economy: 8.7 },
          { name: "Tim David", overs: 3, runs: 27, wickets: 0, economy: 9.0 }
        ]
      }
    ]
  },

  M2: {
    matchId: "M2",
    matchTitle: "Royal Challengers Bengaluru vs Kolkata Knight Riders",
    status: "RCB won by 20 runs",
    innings: [
      {
        team: "Royal Challengers Bengaluru",
        score: "192/6 (20)",
        batsmen: [
          { name: "Virat Kohli", runs: 65, balls: 42, fours: 7, sixes: 2, strikeRate: "154.7" },
          { name: "Faf du Plessis", runs: 44, balls: 29, fours: 5, sixes: 1, strikeRate: "151.7" },
          { name: "Glenn Maxwell", runs: 30, balls: 20, fours: 3, sixes: 1, strikeRate: "150.0" },
          { name: "Dinesh Karthik", runs: 22, balls: 15, fours: 2, sixes: 1, strikeRate: "146.6" },
          { name: "Anuj Rawat", runs: 15, balls: 10, fours: 1, sixes: 0, strikeRate: "150.0" },
          { name: "Mahipal Lomror", runs: 10, balls: 8, fours: 1, sixes: 0, strikeRate: "125.0" }
        ],
        bowlers: [
          { name: "Sunil Narine", overs: 4, runs: 26, wickets: 2, economy: 6.5 },
          { name: "Varun Chakravarthy", overs: 4, runs: 35, wickets: 1, economy: 8.7 },
          { name: "Andre Russell", overs: 4, runs: 40, wickets: 1, economy: 10.0 },
          { name: "Shardul Thakur", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Kolkata Knight Riders",
        score: "172/9 (20)",
        batsmen: [
          { name: "Shreyas Iyer", runs: 58, balls: 39, fours: 6, sixes: 1, strikeRate: "148.7" },
          { name: "Andre Russell", runs: 30, balls: 15, fours: 2, sixes: 2, strikeRate: "200.0" },
          { name: "Nitish Rana", runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: "122.2" },
          { name: "Rinku Singh", runs: 25, balls: 20, fours: 2, sixes: 1, strikeRate: "125.0" },
          { name: "Rahmanullah Gurbaz", runs: 15, balls: 12, fours: 2, sixes: 0, strikeRate: "125.0" }
        ],
        bowlers: [
          { name: "Mohammed Siraj", overs: 4, runs: 29, wickets: 2, economy: 7.2 },
          { name: "Karn Sharma", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Harshal Patel", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Glenn Maxwell", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      }
    ]
  },

    M3: {
    matchId: "M3",
    matchTitle: "Delhi Capitals vs Punjab Kings",
    status: "PBKS won by 5 wickets",
    innings: [
      {
        team: "Delhi Capitals",
        score: "165/8 (20)",
        batsmen: [
          { name: "David Warner", runs: 54, balls: 35, fours: 6, sixes: 2, strikeRate: "154.2" },
          { name: "Prithvi Shaw", runs: 32, balls: 22, fours: 4, sixes: 1, strikeRate: "145.5" },
          { name: "Rishabh Pant", runs: 25, balls: 18, fours: 2, sixes: 1, strikeRate: "138.9" },
          { name: "Mitchell Marsh", runs: 18, balls: 12, fours: 1, sixes: 1, strikeRate: "150.0" },
          { name: "Axar Patel", runs: 16, balls: 10, fours: 2, sixes: 0, strikeRate: "160.0" },
          { name: "Sarfaraz Khan", runs: 10, balls: 9, fours: 1, sixes: 0, strikeRate: "111.1" }
        ],
        bowlers: [
          { name: "Kagiso Rabada", overs: 4, runs: 27, wickets: 2, economy: 6.7 },
          { name: "Rahul Chahar", overs: 4, runs: 35, wickets: 1, economy: 8.7 },
          { name: "Sam Curran", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Arshdeep Singh", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Punjab Kings",
        score: "166/5 (19.2)",
        batsmen: [
          { name: "Shikhar Dhawan", runs: 61, balls: 41, fours: 7, sixes: 1, strikeRate: "148.8" },
          { name: "Liam Livingstone", runs: 42, balls: 25, fours: 3, sixes: 2, strikeRate: "168.0" },
          { name: "Jitesh Sharma", runs: 22, balls: 14, fours: 2, sixes: 1, strikeRate: "157.1" },
          { name: "Bhanuka Rajapaksa", runs: 15, balls: 12, fours: 1, sixes: 0, strikeRate: "125.0" },
          { name: "Sam Curran", runs: 12, balls: 8, fours: 1, sixes: 0, strikeRate: "150.0" }
        ],
        bowlers: [
          { name: "Anrich Nortje", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Kuldeep Yadav", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Khaleel Ahmed", overs: 3.2, runs: 32, wickets: 1, economy: 9.6 },
          { name: "Axar Patel", overs: 4, runs: 28, wickets: 1, economy: 7.0 }
        ]
      }
    ]
  },

  M4: {
    matchId: "M4",
    matchTitle: "Sunrisers Hyderabad vs Rajasthan Royals",
    status: "RR won by 15 runs",
    innings: [
      {
        team: "Rajasthan Royals",
        score: "189/6 (20)",
        batsmen: [
          { name: "Jos Buttler", runs: 74, balls: 46, fours: 8, sixes: 2, strikeRate: "160.9" },
          { name: "Yashasvi Jaiswal", runs: 39, balls: 25, fours: 5, sixes: 1, strikeRate: "156.0" },
          { name: "Sanju Samson", runs: 32, balls: 20, fours: 3, sixes: 1, strikeRate: "160.0" },
          { name: "Shimron Hetmyer", runs: 20, balls: 15, fours: 2, sixes: 1, strikeRate: "133.3" },
          { name: "Riyan Parag", runs: 12, balls: 9, fours: 1, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Bhuvneshwar Kumar", overs: 4, runs: 33, wickets: 1, economy: 8.2 },
          { name: "Umran Malik", overs: 4, runs: 36, wickets: 2, economy: 9.0 },
          { name: "T Natarajan", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Washington Sundar", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Sunrisers Hyderabad",
        score: "174/8 (20)",
        batsmen: [
          { name: "Mayank Agarwal", runs: 49, balls: 35, fours: 5, sixes: 1, strikeRate: "140.0" },
          { name: "Abhishek Sharma", runs: 35, balls: 26, fours: 4, sixes: 1, strikeRate: "134.6" },
          { name: "Aiden Markram", runs: 28, balls: 20, fours: 3, sixes: 0, strikeRate: "140.0" },
          { name: "Rahul Tripathi", runs: 24, balls: 18, fours: 2, sixes: 1, strikeRate: "133.3" },
          { name: "Heinrich Klaasen", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Trent Boult", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Yuzvendra Chahal", overs: 4, runs: 35, wickets: 2, economy: 8.7 },
          { name: "R Ashwin", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Sandeep Sharma", overs: 4, runs: 33, wickets: 1, economy: 8.2 }
        ]
      }
    ]
  },

  M5: {
    matchId: "M5",
    matchTitle: "Lucknow Super Giants vs Gujarat Titans",
    status: "GT won by 6 wickets",
    innings: [
      {
        team: "Lucknow Super Giants",
        score: "170/7 (20)",
        batsmen: [
          { name: "KL Rahul", runs: 64, balls: 42, fours: 8, sixes: 1, strikeRate: "152.4" },
          { name: "Quinton de Kock", runs: 33, balls: 25, fours: 4, sixes: 1, strikeRate: "132.0" },
          { name: "Deepak Hooda", runs: 28, balls: 21, fours: 3, sixes: 0, strikeRate: "133.3" },
          { name: "Marcus Stoinis", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" },
          { name: "Krunal Pandya", runs: 12, balls: 9, fours: 1, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Mohammed Shami", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Rashid Khan", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Alzarri Joseph", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Hardik Pandya", overs: 4, runs: 34, wickets: 1, economy: 8.5 }
        ]
      },
      {
        team: "Gujarat Titans",
        score: "171/4 (19.1)",
        batsmen: [
          { name: "Shubman Gill", runs: 71, balls: 47, fours: 8, sixes: 2, strikeRate: "151.0" },
          { name: "Wriddhiman Saha", runs: 28, balls: 20, fours: 3, sixes: 0, strikeRate: "140.0" },
          { name: "Hardik Pandya", runs: 32, balls: 24, fours: 3, sixes: 1, strikeRate: "133.3" },
          { name: "David Miller", runs: 25, balls: 15, fours: 2, sixes: 1, strikeRate: "166.7" }
        ],
        bowlers: [
          { name: "Mark Wood", overs: 4, runs: 36, wickets: 2, economy: 9.0 },
          { name: "Avesh Khan", overs: 4, runs: 35, wickets: 1, economy: 8.7 },
          { name: "Krunal Pandya", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Ravi Bishnoi", overs: 3.1, runs: 28, wickets: 0, economy: 8.8 }
        ]
      }
    ]
  },

  M6: {
    matchId: "M6",
    matchTitle: "Mumbai Indians vs Rajasthan Royals",
    status: "RR won by 8 wickets",
    innings: [
      {
        team: "Mumbai Indians",
        score: "161/9 (20)",
        batsmen: [
          { name: "Rohit Sharma", runs: 44, balls: 30, fours: 5, sixes: 1, strikeRate: "146.7" },
          { name: "Ishan Kishan", runs: 35, balls: 25, fours: 4, sixes: 1, strikeRate: "140.0" },
          { name: "Suryakumar Yadav", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" },
          { name: "Tilak Varma", runs: 18, balls: 14, fours: 2, sixes: 0, strikeRate: "128.6" },
          { name: "Tim David", runs: 16, balls: 10, fours: 1, sixes: 1, strikeRate: "160.0" }
        ],
        bowlers: [
          { name: "Trent Boult", overs: 4, runs: 25, wickets: 2, economy: 6.2 },
          { name: "Yuzvendra Chahal", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "R Ashwin", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Sandeep Sharma", overs: 4, runs: 30, wickets: 2, economy: 7.5 }
        ]
      },
      {
        team: "Rajasthan Royals",
        score: "162/2 (18.3)",
        batsmen: [
          { name: "Jos Buttler", runs: 68, balls: 42, fours: 8, sixes: 2, strikeRate: "161.9" },
          { name: "Yashasvi Jaiswal", runs: 47, balls: 30, fours: 6, sixes: 1, strikeRate: "156.7" },
          { name: "Sanju Samson", runs: 30, balls: 20, fours: 3, sixes: 1, strikeRate: "150.0" }
        ],
        bowlers: [
          { name: "Jasprit Bumrah", overs: 4, runs: 28, wickets: 1, economy: 7.0 },
          { name: "Piyush Chawla", overs: 4, runs: 36, wickets: 0, economy: 9.0 },
          { name: "Cameron Green", overs: 4, runs: 30, wickets: 0, economy: 7.5 },
          { name: "Hardik Pandya", overs: 3.3, runs: 40, wickets: 1, economy: 11.4 }
        ]
      }
    ]
  },

  M7: {
    matchId: "M7",
    matchTitle: "Chennai Super Kings vs Delhi Capitals",
    status: "CSK won by 22 runs",
    innings: [
      {
        team: "Chennai Super Kings",
        score: "185/6 (20)",
        batsmen: [
          { name: "Ruturaj Gaikwad", runs: 62, balls: 44, fours: 7, sixes: 2, strikeRate: "140.9" },
          { name: "Devon Conway", runs: 34, balls: 25, fours: 4, sixes: 0, strikeRate: "136.0" },
          { name: "Shivam Dube", runs: 28, balls: 18, fours: 2, sixes: 2, strikeRate: "155.6" },
          { name: "MS Dhoni", runs: 20, balls: 10, fours: 2, sixes: 1, strikeRate: "200.0" }
        ],
        bowlers: [
          { name: "Anrich Nortje", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Kuldeep Yadav", overs: 4, runs: 28, wickets: 1, economy: 7.0 },
          { name: "Khaleel Ahmed", overs: 4, runs: 40, wickets: 1, economy: 10.0 },
          { name: "Axar Patel", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Delhi Capitals",
        score: "163/7 (20)",
        batsmen: [
          { name: "David Warner", runs: 50, balls: 36, fours: 6, sixes: 1, strikeRate: "138.9" },
          { name: "Prithvi Shaw", runs: 30, balls: 22, fours: 4, sixes: 1, strikeRate: "136.4" },
          { name: "Rishabh Pant", runs: 28, balls: 18, fours: 2, sixes: 1, strikeRate: "155.6" },
          { name: "Mitchell Marsh", runs: 25, balls: 20, fours: 2, sixes: 1, strikeRate: "125.0" }
        ],
        bowlers: [
          { name: "Deepak Chahar", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Ravindra Jadeja", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Matheesha Pathirana", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Moeen Ali", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      }
    ]
  },

  M8: {
    matchId: "M8",
    matchTitle: "Punjab Kings vs Gujarat Titans",
    status: "GT won by 5 wickets",
    innings: [
      {
        team: "Punjab Kings",
        score: "172/8 (20)",
        batsmen: [
          { name: "Shikhar Dhawan", runs: 60, balls: 42, fours: 7, sixes: 1, strikeRate: "142.9" },
          { name: "Liam Livingstone", runs: 35, balls: 24, fours: 3, sixes: 2, strikeRate: "145.8" },
          { name: "Jitesh Sharma", runs: 28, balls: 18, fours: 3, sixes: 1, strikeRate: "155.6" },
          { name: "Bhanuka Rajapaksa", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Mohammed Shami", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Rashid Khan", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Joshua Little", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Hardik Pandya", overs: 4, runs: 32, wickets: 1, economy: 8.0 }
        ]
      },
      {
        team: "Gujarat Titans",
        score: "173/5 (19.4)",
        batsmen: [
          { name: "Shubman Gill", runs: 66, balls: 44, fours: 8, sixes: 1, strikeRate: "150.0" },
          { name: "Wriddhiman Saha", runs: 28, balls: 21, fours: 3, sixes: 0, strikeRate: "133.3" },
          { name: "Hardik Pandya", runs: 32, balls: 22, fours: 2, sixes: 1, strikeRate: "145.5" },
          { name: "David Miller", runs: 25, balls: 17, fours: 2, sixes: 1, strikeRate: "147.1" }
        ],
        bowlers: [
          { name: "Arshdeep Singh", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Rahul Chahar", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Sam Curran", overs: 4, runs: 30, wickets: 1, economy: 7.5 },
          { name: "Kagiso Rabada", overs: 3.4, runs: 36, wickets: 1, economy: 9.8 }
        ]
      }
    ]
  },

    M9: {
    matchId: "M9",
    matchTitle: "Royal Challengers Bengaluru vs Sunrisers Hyderabad",
    status: "SRH won by 4 wickets",
    innings: [
      {
        team: "Royal Challengers Bengaluru",
        score: "168/7 (20)",
        batsmen: [
          { name: "Virat Kohli", runs: 58, balls: 40, fours: 6, sixes: 1, strikeRate: "145.0" },
          { name: "Faf du Plessis", runs: 36, balls: 25, fours: 5, sixes: 0, strikeRate: "144.0" },
          { name: "Glenn Maxwell", runs: 28, balls: 18, fours: 2, sixes: 2, strikeRate: "155.6" },
          { name: "Dinesh Karthik", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Bhuvneshwar Kumar", overs: 4, runs: 30, wickets: 1, economy: 7.5 },
          { name: "Umran Malik", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Washington Sundar", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "T Natarajan", overs: 4, runs: 34, wickets: 2, economy: 8.5 }
        ]
      },
      {
        team: "Sunrisers Hyderabad",
        score: "170/6 (19.3)",
        batsmen: [
          { name: "Mayank Agarwal", runs: 52, balls: 37, fours: 6, sixes: 1, strikeRate: "140.5" },
          { name: "Abhishek Sharma", runs: 38, balls: 24, fours: 5, sixes: 1, strikeRate: "158.3" },
          { name: "Rahul Tripathi", runs: 26, balls: 18, fours: 2, sixes: 1, strikeRate: "144.4" },
          { name: "Aiden Markram", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Mohammed Siraj", overs: 4, runs: 33, wickets: 2, economy: 8.2 },
          { name: "Karn Sharma", overs: 4, runs: 35, wickets: 2, economy: 8.7 },
          { name: "Harshal Patel", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Glenn Maxwell", overs: 3.3, runs: 28, wickets: 1, economy: 8.0 }
        ]
      }
    ]
  },

  M10: {
    matchId: "M10",
    matchTitle: "Delhi Capitals vs Lucknow Super Giants",
    status: "LSG won by 2 runs",
    innings: [
      {
        team: "Lucknow Super Giants",
        score: "182/6 (20)",
        batsmen: [
          { name: "KL Rahul", runs: 72, balls: 47, fours: 9, sixes: 1, strikeRate: "153.2" },
          { name: "Quinton de Kock", runs: 36, balls: 25, fours: 4, sixes: 1, strikeRate: "144.0" },
          { name: "Marcus Stoinis", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Deepak Hooda", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Anrich Nortje", overs: 4, runs: 35, wickets: 2, economy: 8.7 },
          { name: "Kuldeep Yadav", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Axar Patel", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Khaleel Ahmed", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Delhi Capitals",
        score: "180/8 (20)",
        batsmen: [
          { name: "David Warner", runs: 63, balls: 42, fours: 7, sixes: 1, strikeRate: "150.0" },
          { name: "Prithvi Shaw", runs: 32, balls: 21, fours: 5, sixes: 0, strikeRate: "152.4" },
          { name: "Rishabh Pant", runs: 28, balls: 18, fours: 3, sixes: 1, strikeRate: "155.6" },
          { name: "Mitchell Marsh", runs: 20, balls: 16, fours: 2, sixes: 0, strikeRate: "125.0" }
        ],
        bowlers: [
          { name: "Mark Wood", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Avesh Khan", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Ravi Bishnoi", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Krunal Pandya", overs: 4, runs: 35, wickets: 1, economy: 8.7 }
        ]
      }
    ]
  },

  M11: {
    matchId: "M11",
    matchTitle: "Kolkata Knight Riders vs Rajasthan Royals",
    status: "KKR won by 6 wickets",
    innings: [
      {
        team: "Rajasthan Royals",
        score: "174/7 (20)",
        batsmen: [
          { name: "Jos Buttler", runs: 68, balls: 45, fours: 7, sixes: 1, strikeRate: "151.1" },
          { name: "Yashasvi Jaiswal", runs: 34, balls: 25, fours: 4, sixes: 0, strikeRate: "136.0" },
          { name: "Sanju Samson", runs: 28, balls: 18, fours: 2, sixes: 1, strikeRate: "155.6" },
          { name: "Shimron Hetmyer", runs: 22, balls: 16, fours: 2, sixes: 0, strikeRate: "137.5" }
        ],
        bowlers: [
          { name: "Sunil Narine", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Varun Chakravarthy", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Andre Russell", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Shardul Thakur", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Kolkata Knight Riders",
        score: "175/4 (19.2)",
        batsmen: [
          { name: "Shreyas Iyer", runs: 61, balls: 42, fours: 6, sixes: 1, strikeRate: "145.2" },
          { name: "Rinku Singh", runs: 38, balls: 25, fours: 3, sixes: 2, strikeRate: "152.0" },
          { name: "Andre Russell", runs: 28, balls: 16, fours: 2, sixes: 2, strikeRate: "175.0" },
          { name: "Nitish Rana", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Trent Boult", overs: 4, runs: 28, wickets: 1, economy: 7.0 },
          { name: "Yuzvendra Chahal", overs: 4, runs: 35, wickets: 1, economy: 8.7 },
          { name: "R Ashwin", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Sandeep Sharma", overs: 3.2, runs: 34, wickets: 1, economy: 10.2 }
        ]
      }
    ]
  },

  M12: {
    matchId: "M12",
    matchTitle: "Punjab Kings vs Sunrisers Hyderabad",
    status: "PBKS won by 12 runs",
    innings: [
      {
        team: "Punjab Kings",
        score: "181/6 (20)",
        batsmen: [
          { name: "Shikhar Dhawan", runs: 65, balls: 44, fours: 7, sixes: 1, strikeRate: "147.7" },
          { name: "Liam Livingstone", runs: 40, balls: 25, fours: 3, sixes: 2, strikeRate: "160.0" },
          { name: "Jitesh Sharma", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Sam Curran", runs: 22, balls: 16, fours: 2, sixes: 0, strikeRate: "137.5" }
        ],
        bowlers: [
          { name: "Bhuvneshwar Kumar", overs: 4, runs: 30, wickets: 1, economy: 7.5 },
          { name: "Umran Malik", overs: 4, runs: 36, wickets: 2, economy: 9.0 },
          { name: "Washington Sundar", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "T Natarajan", overs: 4, runs: 34, wickets: 1, economy: 8.5 }
        ]
      },
      {
        team: "Sunrisers Hyderabad",
        score: "169/8 (20)",
        batsmen: [
          { name: "Mayank Agarwal", runs: 48, balls: 35, fours: 5, sixes: 1, strikeRate: "137.1" },
          { name: "Abhishek Sharma", runs: 35, balls: 24, fours: 4, sixes: 1, strikeRate: "145.8" },
          { name: "Rahul Tripathi", runs: 26, balls: 19, fours: 2, sixes: 0, strikeRate: "136.8" },
          { name: "Aiden Markram", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Kagiso Rabada", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Rahul Chahar", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Sam Curran", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Arshdeep Singh", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      }
    ]
  },

  M13: {
    matchId: "M13",
    matchTitle: "Chennai Super Kings vs Gujarat Titans",
    status: "CSK won by 7 wickets",
    innings: [
      {
        team: "Gujarat Titans",
        score: "167/8 (20)",
        batsmen: [
          { name: "Shubman Gill", runs: 62, balls: 44, fours: 7, sixes: 1, strikeRate: "140.9" },
          { name: "Wriddhiman Saha", runs: 28, balls: 20, fours: 3, sixes: 0, strikeRate: "140.0" },
          { name: "Hardik Pandya", runs: 26, balls: 19, fours: 2, sixes: 1, strikeRate: "136.8" },
          { name: "David Miller", runs: 22, balls: 15, fours: 2, sixes: 0, strikeRate: "146.7" }
        ],
        bowlers: [
          { name: "Deepak Chahar", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Ravindra Jadeja", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Matheesha Pathirana", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Moeen Ali", overs: 4, runs: 34, wickets: 1, economy: 8.5 }
        ]
      },
      {
        team: "Chennai Super Kings",
        score: "168/3 (18.4)",
        batsmen: [
          { name: "Ruturaj Gaikwad", runs: 64, balls: 42, fours: 7, sixes: 1, strikeRate: "152.4" },
          { name: "Devon Conway", runs: 46, balls: 32, fours: 5, sixes: 1, strikeRate: "143.8" },
          { name: "Shivam Dube", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "MS Dhoni", runs: 20, balls: 12, fours: 2, sixes: 0, strikeRate: "166.7" }
        ],
        bowlers: [
          { name: "Mohammed Shami", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Rashid Khan", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Alzarri Joseph", overs: 4, runs: 34, wickets: 0, economy: 8.5 },
          { name: "Hardik Pandya", overs: 4, runs: 34, wickets: 0, economy: 8.5 }
        ]
      }
    ]
  },

  M14: {
    matchId: "M14",
    matchTitle: "Mumbai Indians vs Delhi Capitals",
    status: "MI won by 15 runs",
    innings: [
      {
        team: "Mumbai Indians",
        score: "190/6 (20)",
        batsmen: [
          { name: "Rohit Sharma", runs: 70, balls: 46, fours: 8, sixes: 2, strikeRate: "152.2" },
          { name: "Ishan Kishan", runs: 38, balls: 25, fours: 4, sixes: 1, strikeRate: "152.0" },
          { name: "Suryakumar Yadav", runs: 32, balls: 20, fours: 4, sixes: 1, strikeRate: "160.0" },
          { name: "Tilak Varma", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Anrich Nortje", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Kuldeep Yadav", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Axar Patel", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Khaleel Ahmed", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Delhi Capitals",
        score: "175/8 (20)",
        batsmen: [
          { name: "David Warner", runs: 66, balls: 45, fours: 7, sixes: 1, strikeRate: "146.7" },
          { name: "Prithvi Shaw", runs: 34, balls: 23, fours: 5, sixes: 0, strikeRate: "147.8" },
          { name: "Rishabh Pant", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Mitchell Marsh", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Jasprit Bumrah", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Piyush Chawla", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Hardik Pandya", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Jason Behrendorff", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      }
    ]
  },

  M15: {
    matchId: "M15",
    matchTitle: "Lucknow Super Giants vs Rajasthan Royals",
    status: "RR won by 5 wickets",
    innings: [
      {
        team: "Lucknow Super Giants",
        score: "171/6 (20)",
        batsmen: [
          { name: "KL Rahul", runs: 62, balls: 43, fours: 7, sixes: 1, strikeRate: "144.2" },
          { name: "Quinton de Kock", runs: 36, balls: 25, fours: 4, sixes: 0, strikeRate: "144.0" },
          { name: "Marcus Stoinis", runs: 28, balls: 19, fours: 2, sixes: 1, strikeRate: "147.4" },
          { name: "Deepak Hooda", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Trent Boult", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Yuzvendra Chahal", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "R Ashwin", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Sandeep Sharma", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Rajasthan Royals",
        score: "172/5 (19.3)",
        batsmen: [
          { name: "Jos Buttler", runs: 68, balls: 45, fours: 7, sixes: 1, strikeRate: "151.1" },
          { name: "Yashasvi Jaiswal", runs: 38, balls: 27, fours: 5, sixes: 0, strikeRate: "140.7" },
          { name: "Sanju Samson", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Shimron Hetmyer", runs: 22, balls: 16, fours: 2, sixes: 0, strikeRate: "137.5" }
        ],
        bowlers: [
          { name: "Mark Wood", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Avesh Khan", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Ravi Bishnoi", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Krunal Pandya", overs: 3.3, runs: 32, wickets: 0, economy: 9.1 }
        ]
      }
    ]
  },

  M16: {
    matchId: "M16",
    matchTitle: "Punjab Kings vs Gujarat Titans",
    status: "GT won by 3 wickets",
    innings: [
      {
        team: "Punjab Kings",
        score: "165/7 (20)",
        batsmen: [
          { name: "Shikhar Dhawan", runs: 62, balls: 45, fours: 7, sixes: 1, strikeRate: "137.8" },
          { name: "Liam Livingstone", runs: 36, balls: 24, fours: 3, sixes: 1, strikeRate: "150.0" },
          { name: "Jitesh Sharma", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Sam Curran", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Mohammed Shami", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Rashid Khan", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Alzarri Joseph", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Hardik Pandya", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Gujarat Titans",
        score: "166/7 (19.4)",
        batsmen: [
          { name: "Shubman Gill", runs: 68, balls: 47, fours: 8, sixes: 1, strikeRate: "144.7" },
          { name: "Wriddhiman Saha", runs: 28, balls: 21, fours: 3, sixes: 0, strikeRate: "133.3" },
          { name: "Hardik Pandya", runs: 32, balls: 23, fours: 2, sixes: 1, strikeRate: "139.1" },
          { name: "David Miller", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Arshdeep Singh", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Rahul Chahar", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Sam Curran", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Kagiso Rabada", overs: 3.4, runs: 36, wickets: 1, economy: 9.8 }
        ]
      }
    ]
  },
    M17: {
    matchId: "M17",
    matchTitle: "Royal Challengers Bengaluru vs Chennai Super Kings",
    status: "RCB won by 4 wickets",
    innings: [
      {
        team: "Chennai Super Kings",
        score: "178/7 (20)",
        batsmen: [
          { name: "Ruturaj Gaikwad", runs: 64, balls: 42, fours: 7, sixes: 1, strikeRate: "152.4" },
          { name: "Devon Conway", runs: 34, balls: 24, fours: 5, sixes: 0, strikeRate: "141.7" },
          { name: "Shivam Dube", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "MS Dhoni", runs: 20, balls: 13, fours: 2, sixes: 0, strikeRate: "153.8" }
        ],
        bowlers: [
          { name: "Mohammed Siraj", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Harshal Patel", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Karn Sharma", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Glenn Maxwell", overs: 4, runs: 34, wickets: 1, economy: 8.5 }
        ]
      },
      {
        team: "Royal Challengers Bengaluru",
        score: "179/6 (19.3)",
        batsmen: [
          { name: "Virat Kohli", runs: 72, balls: 48, fours: 8, sixes: 1, strikeRate: "150.0" },
          { name: "Faf du Plessis", runs: 38, balls: 26, fours: 5, sixes: 0, strikeRate: "146.2" },
          { name: "Glenn Maxwell", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Dinesh Karthik", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Deepak Chahar", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Ravindra Jadeja", overs: 4, runs: 30, wickets: 1, economy: 7.5 },
          { name: "Matheesha Pathirana", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Moeen Ali", overs: 3.3, runs: 33, wickets: 1, economy: 9.4 }
        ]
      }
    ]
  },

  M18: {
    matchId: "M18",
    matchTitle: "Delhi Capitals vs Sunrisers Hyderabad",
    status: "DC won by 18 runs",
    innings: [
      {
        team: "Delhi Capitals",
        score: "185/5 (20)",
        batsmen: [
          { name: "David Warner", runs: 72, balls: 48, fours: 8, sixes: 1, strikeRate: "150.0" },
          { name: "Prithvi Shaw", runs: 38, balls: 24, fours: 5, sixes: 0, strikeRate: "158.3" },
          { name: "Rishabh Pant", runs: 32, balls: 20, fours: 3, sixes: 1, strikeRate: "160.0" },
          { name: "Mitchell Marsh", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Bhuvneshwar Kumar", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Umran Malik", overs: 4, runs: 36, wickets: 2, economy: 9.0 },
          { name: "Washington Sundar", overs: 4, runs: 30, wickets: 1, economy: 7.5 },
          { name: "T Natarajan", overs: 4, runs: 34, wickets: 1, economy: 8.5 }
        ]
      },
      {
        team: "Sunrisers Hyderabad",
        score: "167/8 (20)",
        batsmen: [
          { name: "Mayank Agarwal", runs: 52, balls: 36, fours: 6, sixes: 1, strikeRate: "144.4" },
          { name: "Abhishek Sharma", runs: 38, balls: 26, fours: 5, sixes: 0, strikeRate: "146.2" },
          { name: "Rahul Tripathi", runs: 28, balls: 19, fours: 2, sixes: 1, strikeRate: "147.4" },
          { name: "Aiden Markram", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Anrich Nortje", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Kuldeep Yadav", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Axar Patel", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Khaleel Ahmed", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      }
    ]
  },

  M19: {
    matchId: "M19",
    matchTitle: "Mumbai Indians vs Rajasthan Royals",
    status: "RR won by 6 wickets",
    innings: [
      {
        team: "Mumbai Indians",
        score: "176/8 (20)",
        batsmen: [
          { name: "Rohit Sharma", runs: 58, balls: 38, fours: 7, sixes: 1, strikeRate: "152.6" },
          { name: "Ishan Kishan", runs: 36, balls: 25, fours: 4, sixes: 1, strikeRate: "144.0" },
          { name: "Suryakumar Yadav", runs: 28, balls: 20, fours: 3, sixes: 1, strikeRate: "140.0" },
          { name: "Tilak Varma", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Trent Boult", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Yuzvendra Chahal", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "R Ashwin", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Sandeep Sharma", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Rajasthan Royals",
        score: "177/4 (19.2)",
        batsmen: [
          { name: "Jos Buttler", runs: 68, balls: 45, fours: 7, sixes: 1, strikeRate: "151.1" },
          { name: "Yashasvi Jaiswal", runs: 38, balls: 26, fours: 5, sixes: 0, strikeRate: "146.2" },
          { name: "Sanju Samson", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Shimron Hetmyer", runs: 22, balls: 16, fours: 2, sixes: 0, strikeRate: "137.5" }
        ],
        bowlers: [
          { name: "Jasprit Bumrah", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Piyush Chawla", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Hardik Pandya", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Jason Behrendorff", overs: 3.2, runs: 36, wickets: 0, economy: 10.8 }
        ]
      }
    ]
  },

  M20: {
    matchId: "M20",
    matchTitle: "Lucknow Super Giants vs Punjab Kings",
    status: "PBKS won by 2 wickets",
    innings: [
      {
        team: "Lucknow Super Giants",
        score: "172/7 (20)",
        batsmen: [
          { name: "KL Rahul", runs: 66, balls: 44, fours: 8, sixes: 1, strikeRate: "150.0" },
          { name: "Quinton de Kock", runs: 32, balls: 22, fours: 4, sixes: 0, strikeRate: "145.5" },
          { name: "Marcus Stoinis", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Deepak Hooda", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Kagiso Rabada", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Rahul Chahar", overs: 4, runs: 30, wickets: 1, economy: 7.5 },
          { name: "Sam Curran", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Arshdeep Singh", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Punjab Kings",
        score: "173/8 (19.5)",
        batsmen: [
          { name: "Shikhar Dhawan", runs: 58, balls: 40, fours: 7, sixes: 1, strikeRate: "145.0" },
          { name: "Liam Livingstone", runs: 38, balls: 26, fours: 3, sixes: 2, strikeRate: "146.2" },
          { name: "Jitesh Sharma", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Sam Curran", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Mark Wood", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Avesh Khan", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Ravi Bishnoi", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Krunal Pandya", overs: 3.5, runs: 31, wickets: 1, economy: 8.1 }
        ]
      }
    ]
  },

  M21: {
    matchId: "M21",
    matchTitle: "Sunrisers Hyderabad vs Gujarat Titans",
    status: "GT won by 5 wickets",
    innings: [
      {
        team: "Sunrisers Hyderabad",
        score: "164/7 (20)",
        batsmen: [
          { name: "Mayank Agarwal", runs: 58, balls: 40, fours: 6, sixes: 1, strikeRate: "145.0" },
          { name: "Abhishek Sharma", runs: 32, balls: 22, fours: 4, sixes: 0, strikeRate: "145.5" },
          { name: "Rahul Tripathi", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Aiden Markram", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Mohammed Shami", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Rashid Khan", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Alzarri Joseph", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Hardik Pandya", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Gujarat Titans",
        score: "165/5 (19.3)",
        batsmen: [
          { name: "Shubman Gill", runs: 68, balls: 47, fours: 8, sixes: 1, strikeRate: "144.7" },
          { name: "Wriddhiman Saha", runs: 28, balls: 22, fours: 3, sixes: 0, strikeRate: "127.3" },
          { name: "Hardik Pandya", runs: 32, balls: 24, fours: 2, sixes: 1, strikeRate: "133.3" },
          { name: "David Miller", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Bhuvneshwar Kumar", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Umran Malik", overs: 4, runs: 36, wickets: 2, economy: 9.0 },
          { name: "Washington Sundar", overs: 4, runs: 32, wickets: 0, economy: 8.0 },
          { name: "T Natarajan", overs: 3.3, runs: 33, wickets: 1, economy: 9.4 }
        ]
      }
    ]
  },

  M22: {
    matchId: "M22",
    matchTitle: "Delhi Capitals vs Royal Challengers Bengaluru",
    status: "RCB won by 6 runs",
    innings: [
      {
        team: "Royal Challengers Bengaluru",
        score: "180/6 (20)",
        batsmen: [
          { name: "Virat Kohli", runs: 68, balls: 47, fours: 8, sixes: 1, strikeRate: "144.7" },
          { name: "Faf du Plessis", runs: 38, balls: 25, fours: 5, sixes: 0, strikeRate: "152.0" },
          { name: "Glenn Maxwell", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Dinesh Karthik", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Anrich Nortje", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Kuldeep Yadav", overs: 4, runs: 32, wickets: 1, economy: 8.0 },
          { name: "Axar Patel", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Khaleel Ahmed", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Delhi Capitals",
        score: "174/8 (20)",
        batsmen: [
          { name: "David Warner", runs: 66, balls: 45, fours: 7, sixes: 1, strikeRate: "146.7" },
          { name: "Prithvi Shaw", runs: 34, balls: 23, fours: 5, sixes: 0, strikeRate: "147.8" },
          { name: "Rishabh Pant", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Mitchell Marsh", runs: 20, balls: 15, fours: 2, sixes: 0, strikeRate: "133.3" }
        ],
        bowlers: [
          { name: "Mohammed Siraj", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Harshal Patel", overs: 4, runs: 34, wickets: 2, economy: 8.5 },
          { name: "Karn Sharma", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Glenn Maxwell", overs: 4, runs: 34, wickets: 1, economy: 8.5 }
        ]
      }
    ]
  },

  M23: {
    matchId: "M23",
    matchTitle: "Mumbai Indians vs Gujarat Titans",
    status: "GT won by 7 wickets",
    innings: [
      {
        team: "Mumbai Indians",
        score: "172/8 (20)",
        batsmen: [
          { name: "Rohit Sharma", runs: 58, balls: 39, fours: 7, sixes: 1, strikeRate: "148.7" },
          { name: "Ishan Kishan", runs: 34, balls: 24, fours: 5, sixes: 0, strikeRate: "141.7" },
          { name: "Suryakumar Yadav", runs: 28, balls: 20, fours: 3, sixes: 1, strikeRate: "140.0" },
          { name: "Tilak Varma", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Mohammed Shami", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Rashid Khan", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "Alzarri Joseph", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Hardik Pandya", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Gujarat Titans",
        score: "173/3 (18.5)",
        batsmen: [
          { name: "Shubman Gill", runs: 72, balls: 50, fours: 8, sixes: 1, strikeRate: "144.0" },
          { name: "Wriddhiman Saha", runs: 34, balls: 25, fours: 4, sixes: 0, strikeRate: "136.0" },
          { name: "David Miller", runs: 32, balls: 22, fours: 2, sixes: 1, strikeRate: "145.5" },
          { name: "Hardik Pandya", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Jasprit Bumrah", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Piyush Chawla", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Jason Behrendorff", overs: 4, runs: 36, wickets: 1, economy: 9.0 },
          { name: "Hardik Pandya", overs: 3.5, runs: 31, wickets: 0, economy: 8.1 }
        ]
      }
    ]
  },

  M24: {
    matchId: "M24",
    matchTitle: "Rajasthan Royals vs Chennai Super Kings",
    status: "RR won by 2 wickets",
    innings: [
      {
        team: "Chennai Super Kings",
        score: "176/6 (20)",
        batsmen: [
          { name: "Ruturaj Gaikwad", runs: 62, balls: 44, fours: 7, sixes: 1, strikeRate: "140.9" },
          { name: "Devon Conway", runs: 34, balls: 24, fours: 5, sixes: 0, strikeRate: "141.7" },
          { name: "Shivam Dube", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "MS Dhoni", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Trent Boult", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Yuzvendra Chahal", overs: 4, runs: 28, wickets: 2, economy: 7.0 },
          { name: "R Ashwin", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Sandeep Sharma", overs: 4, runs: 36, wickets: 1, economy: 9.0 }
        ]
      },
      {
        team: "Rajasthan Royals",
        score: "177/8 (19.5)",
        batsmen: [
          { name: "Jos Buttler", runs: 72, balls: 49, fours: 8, sixes: 1, strikeRate: "146.9" },
          { name: "Yashasvi Jaiswal", runs: 38, balls: 26, fours: 5, sixes: 0, strikeRate: "146.2" },
          { name: "Sanju Samson", runs: 28, balls: 20, fours: 2, sixes: 1, strikeRate: "140.0" },
          { name: "Shimron Hetmyer", runs: 20, balls: 14, fours: 2, sixes: 0, strikeRate: "142.9" }
        ],
        bowlers: [
          { name: "Deepak Chahar", overs: 4, runs: 32, wickets: 2, economy: 8.0 },
          { name: "Ravindra Jadeja", overs: 4, runs: 30, wickets: 2, economy: 7.5 },
          { name: "Matheesha Pathirana", overs: 4, runs: 34, wickets: 1, economy: 8.5 },
          { name: "Moeen Ali", overs: 3.5, runs: 31, wickets: 1, economy: 8.1 }
        ]
      }
    ]
  }
};

export default dummyScoreCard;