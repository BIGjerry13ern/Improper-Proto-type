// Improper Project: Story Database
export const storyCampaign = {
  // ACT 1: THE ASHEN AWAKENING
  "act_1_phase_1": {
    act: "Act 1: The Ashen Awakening",
    title: "The Subterranean Cell",
    text: "You wake up on cold stone. The air tastes of iron and ash. A glowing rune is burned into your forearm, pulsing with a chaotic energy. The iron bars of your cell are rusted, but a dead guard's keyring sits just out of reach.",
    choices: [
      {
        text: "Channel the rune's raw energy to shatter the iron bars.",
        statImpact: { strength: 5, magic: 10, health: -10 },
        flagSet: "used_chaos_magic",
        nextPhase: "act_1_phase_2a"
      },
      {
        text: "Snap a bone from the skeleton in the corner and pick the lock.",
        statImpact: { agility: 10, stealth: 5, health: 0 },
        flagSet: "stealth_approach",
        nextPhase: "act_1_phase_2b"
      }
    ]
  },
  "act_1_phase_2a": {
    act: "Act 1: The Ashen Awakening",
    title: "The Cell Block (Loud)",
    text: "The bars explode outward. The noise echoes through the caverns, instantly alerting the Warden's hounds. They are charging down the corridor.",
    choices: [
      {
        text: "Rip an iron bar from the rubble and prepare to crush them.",
        statImpact: { strength: 15, stealth: -10, health: -5 },
        flagSet: "killed_hounds_brutally",
        nextPhase: "act_2_phase_1" 
      },
      {
        text: "Release the unstable rune energy into a shockwave.",
        statImpact: { magic: 20, strength: -5, health: -15 },
        flagSet: "unlocked_aoe_spells",
        nextPhase: "act_2_phase_1"
      }
    ]
  },
  "act_1_phase_2b": {
    act: "Act 1: The Ashen Awakening",
    title: "The Shadows",
    text: "You slip out silently. A lone guard is patrolling the corridor ahead.",
    choices: [
      {
        text: "Sneak up and choke him out.",
        statImpact: { stealth: 10, strength: 5, health: 0 },
        flagSet: "silent_assassin",
        nextPhase: "act_2_phase_1" 
      },
      {
        text: "Use your rune to create a distraction down the hall.",
        statImpact: { magic: 5, stealth: 5, health: 0 },
        flagSet: "illusionist",
        nextPhase: "act_2_phase_1"
      }
    ]
  },
  // ACT 2: THE IRON BARON'S FALL
  "act_2_phase_1": {
    act: "Act 2: The Iron Baron's Fall",
    title: "The Siege of Rustwatch",
    text: "You've reached the surface. The Iron Baron's fortress looms ahead. You have one chance to strike before the gates close.",
    choices: [
      {
        text: "Lead a frontal assault, targeting the gate captain to break their morale.",
        statImpact: { charisma: 10, strength: 10, health: -20 },
        flagSet: "baron_fears_you",
        nextPhase: "act_3_phase_1"
      },
      {
        text: "Slip into the aqueducts and poison the fortress water supply.",
        statImpact: { stealth: 20, magic: 5 },
        flagSet: "fortress_poisoned",
        nextPhase: "act_3_phase_1"
      }
    ]
  },
  // ACT 3: THE ABYSSAL INCURSION
  "act_3_phase_1": {
    act: "Act 3: The Abyssal Incursion",
    title: "The First Rift",
    text: "The sky tears open above the Baron's ruined keep. A Rift to the Abyss is pulling the landscape into the void.",
    choices: [
      {
        text: "Overload your stats. Siphon the Void energy directly into your veins.",
        statImpact: { magic: 50, health_max: -25 },
        flagSet: "corrupted_blood",
        nextPhase: "act_4_phase_1"
      },
      {
        text: "Use the Baron's anvil to forge a seal using your own life force.",
        statImpact: { strength: 20, defense: 30, health_max: -10 },
        flagSet: "savior_of_the_realm",
        nextPhase: "act_4_phase_1"
      }
    ]
  },
  // ACT 4: THRONE OF THE DEAD GOD
  "act_4_phase_1": {
    act: "Act 4: Throne of the Dead God",
    title: "The Celestial Gates",
    text: "You stand before the rotting golden gates of the Dead God. The God speaks: 'Kneel.'",
    choices: [
      {
        text: "Refuse. Unleash every stat buff and combo you've built directly into the gates.",
        statImpact: { strength: 100, magic: 100, health: -99 },
        flagSet: "god_challenger",
        nextPhase: "ending_1"
      },
      {
        text: "Kneel, only to get close enough to drive a hidden blade into his celestial heart.",
        statImpact: { stealth: 100, agility: 50, health: -50 },
        flagSet: "god_assassin",
        nextPhase: "ending_2"
      }
    ]
  },
  "ending_1": {
    act: "Epilogue", title: "The Shattered Crown", text: "You destroyed the god, but the power tore the realm apart. You rule over the ashes.", choices: []
  },
  "ending_2": {
    act: "Epilogue", title: "The Silent Throne", text: "The god is dead. No one knows it was you. You fade into the shadows as a legend.", choices: []
  }
};
