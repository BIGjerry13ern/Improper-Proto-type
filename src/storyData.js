{
  "start": {
    "title": "SYSTEM BOOT // SPACER'S CHOICE TERMINAL",
    "text": "You wake up coughing up cryo-fluid. Your contract states you owe 12,000 Credits for the oxygen you breathed while asleep. The station is on lockdown. You need an exit.",
    "choices": [
      { "text": "[CORP] Log in, accept debt, and report to Fox Hydro.", "next": "fox_hydro", "stat": { "loyalty": 20 } },
      { "text": "[TECH] Hack the terminal for access.", "next": "hack_terminal", "stat": { "stealth": 10, "heat": 15 } },
      { "text": "[BRUTE] Smash the cryo-glass and run.", "next": "smash_out", "stat": { "health": -10, "agility": 5 } },
      { "text": "[SCAVENGE] Loot the pod next to you.", "next": "loot_pod", "stat": { "credits": 50, "heat": 5 } }
    ]
  },
  "fox_hydro": {
    "title": "FOX HYDRO-PURIFICATION",
    "text": "You are assigned to the sludge vats. The fumes are toxic, but the pay is steady. You see a way to skim chemicals.",
    "choices": [
      { "text": "Work the shift.", "next": "start", "stat": { "credits": 100 } },
      { "text": "Skim chemicals.", "next": "start", "stat": { "credits": 300, "heat": 20 } },
      { "text": "Sabotage the pump.", "next": "start", "stat": { "heat": 50, "loyalty": -50 } },
      { "text": "Take a break.", "next": "start", "stat": { "health": -10 } }
    ]
  }
},