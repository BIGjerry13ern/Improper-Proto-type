  // --- EXPANDING THE SCAVENGER ROUTE ---
  read_mythic: {
    title: "THE MYTHIC DECRYPTION",
    text: "You plug the drive in. A holographic pack wheel spins rapidly on the screen before landing on a 'Mythic' tier file. It's a blueprint for an experimental Dellian Fel-class plasma engine—worth thousands if you can find a buyer.",
    choices: [
      { text: "Eject the drive and take it to the black market.", nextPhase: "black_market_hub", statImpact: { heat: 10, stealth: 5 } },
      { text: "Try to memorize the blueprints and destroy the drive.", nextPhase: "memorize_mythic", statImpact: { stealth: 15, loyalty: -10 } },
      { text: "Upload the data to the public network to cause corporate chaos.", nextPhase: "public_upload", statImpact: { heat: 60, loyalty: -100 } },
      { text: "Sell the data back to the Corporation anonymously.", nextPhase: "sell_to_corp", statImpact: { credits: 2000, loyalty: 20 } }
    ]
  },
  hide_drive: {
    title: "BURIED TREASURE",
    text: "You stash the Mythic drive under a loose floor panel in the cryo-bay. It's safe for now, but you need to survive long enough to come back for it.",
    choices: [
      { text: "Head out to the main promenade to blend in.", nextPhase: "promenade_stealth", statImpact: { stealth: 10, agility: 5 } },
      { text: "Sneak into the ventilation shafts to bypass security.", nextPhase: "vent_shafts", statImpact: { stealth: 15, health: -5 } },
      { text: "Report to Fox Hydro as a cover story.", nextPhase: "fox_hydro_start", statImpact: { loyalty: 10, heat: -10 } },
      { text: "Look for a weapon in the maintenance closet.", nextPhase: "maintenance_closet", statImpact: { agility: 5, heat: 5 } }
    ]
  },

  // --- EXPANDING THE BRUTE FORCE ROUTE ---
  drone_combat: {
    title: "SCRAP METAL",
    text: "You lunge at the drones. Your glass shard finds the wiring joint on the first one, but the second one grazes your shoulder with a laser. You are badly hurt.",
    choices: [
      { text: "Inject a black-market 'Wolverine' bio-stim to rapidly heal.", nextPhase: "wolverine_stim", statImpact: { health: 50, heat: 10, stealth: -5 } },
      { text: "Rip the laser cannon off the broken drone.", nextPhase: "take_drone_gun", statImpact: { agility: -5, heat: 25 } },
      { text: "Retreat and dive into the trash chute.", nextPhase: "trash_chute", statImpact: { health: -10, stealth: 20 } },
      { text: "Keep smashing the remaining drone with bare hands.", nextPhase: "smash_drone_2", statImpact: { health: -20, agility: 10 } }
    ]
  },
  pipe_shield: {
    title: "DEFENSIVE STAND",
    text: "The drones fire, but the heavy iron pipe absorbs the blasts. The pipe is superheated, burning your hands, but you survive the volley.",
    choices: [
      { text: "Throw the superheated pipe at the drones like a spear.", nextPhase: "throw_pipe", statImpact: { agility: 15, heat: 10 } },
      { text: "Use the distraction to run for the elevators.", nextPhase: "elevator_escape", statImpact: { health: -5, stealth: 5 } },
      { text: "Charge forward and bash them with the glowing metal.", nextPhase: "bash_drones", statImpact: { health: -15, heat: 20 } },
      { text: "Drop the pipe and surrender.", nextPhase: "corporate_jail", statImpact: { health: 0, heat: -30 } }
    ]
  },

  // --- EXPANDING THE TECH/STEALTH ROUTE ---
  casino_entry: {
    title: "PLATINUM RANKED",
    text: "Your forged ID gets you into the high-roller casino. The bouncer nods, 'Welcome back to Platinum Tier, Room 53.' The room is full of wealthy Board members.",
    choices: [
      { text: "Sit at a high-stakes card table and try to win credits.", nextPhase: "play_cards", statImpact: { stealth: 5, loyalty: 5 } },
      { text: "Pickpocket the drunk executive next to you.", nextPhase: "pickpocket_exec", statImpact: { credits: 800, heat: 20, stealth: -5 } },
      { text: "Hack the slot machines to spit out a jackpot.", nextPhase: "hack_slots", statImpact: { credits: 2000, heat: 50 } },
      { text: "Order a drink and eavesdrop on corporate secrets.", nextPhase: "eavesdrop_secrets", statImpact: { stealth: 15, agility: 5 } }
    ]
  },
  bank_hack: {
    title: "DIGITAL HEIST",
    text: "You successfully siphon 1,000 credits, but ICE (Intrusion Countermeasures Electronics) locks onto your terminal. They are tracing your location.",
    choices: [
      { text: "Burn the terminal's motherboard to stop the trace.", nextPhase: "burn_terminal", statImpact: { heat: 15, stealth: 10 } },
      { text: "Try to route the trace to the Fox Hydro sector.", nextPhase: "frame_fox_hydro", statImpact: { loyalty: -30, stealth: 20 } },
      { text: "Greedily try to steal another 500 credits before disconnecting.", nextPhase: "greedy_hack", statImpact: { credits: 500, heat: 40 } },
      { text: "Run immediately before the security team arrives.", nextPhase: "run_from_bank", statImpact: { agility: 15, heat: 5 } }
    ]
  },

  // --- THE SMUGGLER PARTNER ROUTE ---
  smuggler_job: {
    title: "THE DUO PARTNER",
    text: "The smuggler leans in. 'My partner is trapped in Sector 4. They are a chill, support-focused mechanic who is insanely fast at building makeshift cover. If you get them out, we leave this rock together.'",
    choices: [
      { text: "Accept the job and head to Sector 4.", nextPhase: "sector_4_rescue", statImpact: { loyalty: -10, agility: 5 } },
      { text: "Demand half the credits upfront before you go.", nextPhase: "demand_credits", statImpact: { credits: 500, heat: 5 } },
      { text: "Refuse the job and walk away.", nextPhase: "promenade_stealth", statImpact: { stealth: 5 } },
      { text: "Knock the smuggler out and steal the coordinates to his stash.", nextPhase: "steal_stash", statImpact: { heat: 40, health: -10 } }
    ]
  },
  // --- EXPANDING THE CASINO / PLATINUM TIER ---
  play_cards: {
    title: "HIGH STAKES SNAP",
    text: "You sit at the table. The game is a fast-paced card battler. The smug corporate executive across from you carelessly drops a rare 'Ex-SOLDIER, Cloud' relic card onto the table. You know that card alone fetches exactly 62.20k credits on the open market.",
    choices: [
      { text: "Go all-in and try to win the relic card legitimately.", nextPhase: "win_relic_card", statImpact: { stealth: -5, heat: 10 } },
      { text: "Flip the table and grab the Ex-SOLDIER card in the chaos.", nextPhase: "steal_relic_card", statImpact: { credits: 6220, heat: 40, agility: 5 } },
      { text: "Fold the hand but slip a tracking bug onto the executive.", nextPhase: "track_executive", statImpact: { stealth: 15, loyalty: 5 } },
      { text: "Accuse the executive of dealing from the bottom of the deck.", nextPhase: "casino_brawl", statImpact: { health: -10, heat: 30 } }
    ]
  },
  eavesdrop_secrets: {
    title: "CORPORATE WHISPERS",
    text: "Sipping a synthetic martini, you overhear two Board members discussing a 'dual-eligible' mercenary—an operative who excels as both a long-range sniper and a mainframe hacker. They are looking to hire someone like that for a shadow op.",
    choices: [
      { text: "Approach them and claim you are the dual-eligible merc.", nextPhase: "bluff_board", statImpact: { loyalty: 10, stealth: 5, heat: -10 } },
      { text: "Record the conversation to blackmail them later.", nextPhase: "blackmail_board", statImpact: { stealth: 10, heat: 15 } },
      { text: "Follow them when they leave the casino.", nextPhase: "tail_board", statImpact: { agility: 5, stealth: 5 } },
      { text: "Ignore them and head to the casino vault.", nextPhase: "vault_heist", statImpact: { heat: 50, stealth: -10 } }
    ]
  },

  // --- EXPANDING THE BRUTE FORCE / COMBAT ROUTE ---
  wolverine_stim: {
    title: "UNCONTROLLABLE REGEN",
    text: "The Wolverine bio-stim surges through your veins. Your wounds aggressively knit together, sealing instantly, but a heavy, feral rage clouds your vision. The drones are still scanning the hallway.",
    choices: [
      { text: "Harness the rage and tear the drones apart bare-handed.", nextPhase: "berserker_rage", statImpact: { health: -10, agility: 20, heat: 40 } },
      { text: "Fight the aggression and sprint past them while healed.", nextPhase: "sprint_past", statImpact: { agility: 10, heat: 10 } },
      { text: "Roar a challenge to draw all security to your floor.", nextPhase: "draw_aggro", statImpact: { heat: 60, stealth: -20 } },
      { text: "Try to flush the stim from your system using a medical kit.", nextPhase: "flush_stim", statImpact: { health: -15, stealth: 5 } }
    ]
  },

  // --- EXPANDING THE STEALTH / TRASH CHUTE ROUTE ---
  trash_chute: {
    title: "SECTOR 7 SCRAPYARD",
    text: "You slide down miles of dark piping and crash into the massive lower-deck scrapyard. Among the junk, you spot two things: an old mechanical terminal covered in grime, and a shattered 'Pixel-Pro' comms device.",
    choices: [
      { text: "Spend time deep-cleaning the mechanical keyboard to salvage its processor.", nextPhase: "clean_keyboard", statImpact: { stealth: 10, credits: 50 } },
      { text: "Try to replace the Pixel-Pro's shattered screen to contact the outside.", nextPhase: "fix_comms", statImpact: { agility: 5, heat: 5 } },
      { text: "Bury yourself under the scrap to wait out the security alert.", nextPhase: "wait_in_scrap", statImpact: { stealth: 15, health: -5 } },
      { text: "Fashion a makeshift blade out of the jagged metal.", nextPhase: "craft_blade", statImpact: { agility: 5, heat: 5 } }
    ]
  },

  // --- EXPANDING THE PROMENADE / TOURNAMENT ROUTE ---
  promenade_stealth: {
    title: "THE NEON PROMENADE",
    text: "You blend into the bustling crowd. Above you, massive holographic billboards advertise the 'Mastery IV' underground combat tournament. The announcer boasts: 'Anyone who can maintain a 100% win rate for 12 consecutive matches wins a Busa-Class ship!'",
    choices: [
      { text: "Head underground and register for the Mastery IV tournament.", nextPhase: "arena_registration", statImpact: { heat: 20, agility: 10 } },
      { text: "Hack the Mastery IV betting terminals to skim credits.", nextPhase: "hack_bets", statImpact: { credits: 400, stealth: -5, heat: 15 } },
      { text: "Pickpocket the distracted tourists watching the billboard.", nextPhase: "pickpocket_tourists", statImpact: { credits: 200, stealth: 10 } },
      { text: "Look for a Fox Hydro recruiter to secure a legitimate cover.", nextPhase: "fox_hydro_start", statImpact: { loyalty: 15, heat: -10 } }
    ]
  },

  // --- EXPANDING THE SMUGGLER / DUO PARTNER ROUTE ---
  sector_4_rescue: {
    title: "THE CHAOS ZONE",
    text: "You enter Sector 4. It's an absolute warzone. You spot the smuggler's partner pinned down by corporate fire, but they aren't panicking. They thrive in the chaos, having patiently built an impenetrable, multi-tiered barricade out of cargo crates.",
    choices: [
      { text: "Provide aggressive covering fire so they can fall back.", nextPhase: "covering_fire", statImpact: { heat: 30, agility: 10, health: -10 } },
      { text: "Sneak into their fortified structure and form up as a duo.", nextPhase: "duo_form_up", statImpact: { stealth: 15, agility: 5 } },
      { text: "Flank the corporate guards while the partner holds the aggro.", nextPhase: "flank_guards", statImpact: { heat: 20, stealth: 10 } },
      { text: "Throw a plasma grenade into the crossfire to end it quickly.", nextPhase: "plasma_grenade", statImpact: { heat: 50, health: -5 } }
    ]
  },

  // --- EXPANDING THE BLACK MARKET ROUTE ---
  black_market_hub: {
    title: "THE UNDERCITY BAZAAR",
    text: "The Black Market is a maze of neon and rust. In the corner, a grease-stained mechanic is working on a stolen colony bike. He's trying to flash the ECU to bypass the factory speed limiters.",
    choices: [
      { text: "Offer to help him jailbreak the ECU for a cut of the profits.", nextPhase: "ecu_jailbreak", statImpact: { credits: 300, stealth: 5 } },
      { text: "Sell the Mythic drive to a shady data-broker.", nextPhase: "sell_mythic", statImpact: { credits: 1500, heat: 20 } },
      { text: "Purchase a Gold-Tier forged ID card.", nextPhase: "buy_id", statImpact: { credits: -500, stealth: 20, loyalty: 10 } },
      { text: "Ambush a buyer and steal their credits.", nextPhase: "rob_buyer", statImpact: { health: -10, heat: 40, credits: 800 } }
    ]
  },
   // --- ARENA ARC: MASTERY IV ---
  arena_registration: {
    title: "MASTERY IV // DAY 1",
    text: "The arena is a massive, hollowed-out reactor core. You are given a basic shock-baton and shoved into the ring against a low-tier security bot. The crowd is bloodthirsty.",
    choices: [
      { text: "Use your agility to dance around the bot and strike its weak point.", nextPhase: "arena_match_1_win", statImpact: { agility: 5, health: -5, credits: 100 } },
      { text: "Brute force the bot into the electrified arena walls.", nextPhase: "arena_match_1_crush", statImpact: { health: -15, agility: 5, credits: 150 } },
      { text: "Hack the bot's mobility servos to freeze it in place.", nextPhase: "arena_match_1_hack", statImpact: { stealth: 10, credits: 100 } },
      { text: "Throw the match to gather intel on the other fighters.", nextPhase: "arena_scout", statImpact: { health: 0, loyalty: 5, stealth: 5 } }
    ]
  },
  arena_match_1_win: {
    title: "VICTORY // ROUND 1",
    text: "The crowd roars. You are officially 1/12 of the way to the Busa-Class ship. Your next opponent is a disgraced Board enforcer with a thermal sword.",
    choices: [
      { text: "Upgrade your shock-baton to a thermal-edge baton.", nextPhase: "arena_gear_up", statImpact: { credits: -200, agility: 10 } },
      { text: "Save your credits for the final prize.", nextPhase: "arena_round_2", statImpact: { credits: 0, loyalty: 0 } },
      { text: "Study the enforcer's fight patterns from the bleachers.", nextPhase: "arena_study", statImpact: { stealth: 5, agility: 5 } },
      { text: "Try to poison the enforcer's drink before the match.", nextPhase: "arena_poison", statImpact: { heat: 40, stealth: 5 } }
    ]
  },

  // --- CORPORATE ESPIONAGE ARC ---
  bluff_board: {
    title: "SHADOW OPS INTERVIEW",
    text: "The two Board members stare at you with cold, calculating eyes. 'They say you're the best hacker-sniper on the station. Prove it. Our rival is launching a transport in an hour. Disable it.'",
    choices: [
      { text: "Accept the hit and take the target sniper rifle.", nextPhase: "sniper_mission", statImpact: { heat: 50, stealth: 10, credits: 1000 } },
      { text: "Agree to hack the terminal remotely instead.", nextPhase: "remote_hack_mission", statImpact: { heat: 30, stealth: 20, credits: 800 } },
      { text: "Demand a higher price for an 'S-Class' operative.", nextPhase: "negotiate_price", statImpact: { credits: 2000, heat: 20 } },
      { text: "Decline and try to warn the transport ship.", nextPhase: "warn_transport", statImpact: { heat: 60, loyalty: -50 } }
    ]
  },

  // --- TECHNICIAN/ECU ARC ---
  ecu_jailbreak: {
    title: "LIMITERS REMOVED",
    text: "The mechanic wipes grease off the ECU. 'She's screaming now, kid. 200% power output, but the engine is going to run hotter than a supernova.' You have a supercharged hoverbike engine.",
    choices: [
      { text: "Test the engine on the high-speed transit tubes.", nextPhase: "test_run", statImpact: { agility: 20, health: -5, heat: 30 } },
      { text: "Install the engine into a stolen cargo drone.", nextPhase: "drone_mod", statImpact: { stealth: 10, credits: 100 } },
      { text: "Sell the modded ECU to the highest bidder.", nextPhase: "sell_ecu", statImpact: { credits: 2500, loyalty: -10 } },
      { text: "Use the engine to power your own makeshift escape pod.", nextPhase: "escape_pod_build", statImpact: { credits: -500, stealth: 5 } }
    ]
  },
  test_run: {
    title: "BEYOND THE LIMIT",
    text: "The transit tubes blur into a single streak of neon. Your bike is vibrating violently. You are moving faster than any Spacer's Choice terminal has ever recorded.",
    choices: [
      { text: "Push even harder to reach maximum velocity.", nextPhase: "max_velocity", statImpact: { agility: 30, health: -20, heat: 60 } },
      { text: "Divert power to shielding to keep the engine from exploding.", nextPhase: "divert_shield", statImpact: { health: -10, agility: 10 } },
      { text: "Use the speed to zip past security checkpoints.", nextPhase: "zip_security", statImpact: { stealth: 15, heat: 40 } },
      { text: "Brake hard and stash the bike—you've attracted attention.", nextPhase: "hide_bike", statImpact: { stealth: 5, heat: 20 } }
    ]
  },

  // --- ESCAPE ARC ---
  escape_pod_build: {
    title: "THE LAST RESORT",
    text: "You weld the supercharged engine into the frame of a discarded escape pod. It's not pretty, but it's built for raw speed.",
    choices: [
      { text: "Launch toward the main spaceport exit.", nextPhase: "spaceport_launch", statImpact: { agility: 10, heat: 40 } },
      { text: "Launch through the industrial ventilation exhaust.", nextPhase: "vent_launch", statImpact: { agility: 15, stealth: 10 } },
      { text: "Wait for the smuggler's ship to dock, then latch on.", nextPhase: "latch_ship", statImpact: { stealth: 20, credits: -200 } },
      { text: "Overload the engine to blast a hole in the station wall.", nextPhase: "blast_wall", statImpact: { heat: 100, health: -30 } }
    ]
  }