---
title: NASA Space Robotics Challenge
excerpt: Mission member on the Columbia Space Initiative (CSI) team competing in the NASA Space Robotics Challenge.<br><br><img src='/images/nasasrc/nasasrc_front.png'>
collection: projects
permalink: /projects/project/nasasrc/
# tags:
#   - Robotics
#   - Autonomous Vehicles
#   - Aerospace
#   - NASA
redirect_from: 
  - /nasa.html
  - /nasa/
  - /nasasrc.html
  - /nasasrc/
share: false
read_time: false
category: Personal
---
Phase 2 of the [NASA Space Robotics Challenge (SRC)](https://www.challenge.gov/challenge/space-robotics-challenge-phase-2/){:target="_blank"} deals with [in-situ resource utilization (ISRU)](https://en.wikipedia.org/wiki/In_situ_resource_utilization){:target="_blank"}. ISRU is the practice of collecting and using materials found locally on astronomical objects. ISRU has numerous benefits over bringing material from Earth including but not limited to reduced cost and time and increased efficiency.

Thus the goal of the challenge is to advance the capabilities of autonomous lunar surface robots to aid in ISRU.

> Future ISRU missions may occur on surfaces such as Earth's moon, and will likely need to operate autonomously for long periods of time before, during, and after the presence of astronauts. Robots that can successfully perform ISRU tasks with little to no human intervention are valuable due to both the communication latencies and limited bandwidth between these destinations and Earth. -- [NASA SRC Description](https://www.challenge.gov/challenge/space-robotics-challenge-phase-2/){:target="_blank"}

I am a member of the [Columbia Space Initiative (CSI)](https://columbiaspace.org/missions/mission-nasa-src/){:target="_blank"} team compeating in the NASA SRC.

## Simulation Environment

The entire challenge is conducted in a simulated environment using the [Robot Operating System (ROS)](https://www.ros.org){:target="_blank"} and the [Gazebo](https://columbiaspace.org/missions/mission-nasa-src/){:target="_blank"} simulator.

The simulation environment mimics the Moon with hills, craters, and a random assortment of rocks and volatile compounds. Additionally, the simulation environment contains a home base and, depending on the task, may include a [CubeSat](https://en.wikipedia.org/wiki/CubeSat){:target="_blank"} on the lunar surface.

### Rovers

Three rovers, each created for a specific function, are provided. The scout rover is designed to explore the lunar terrain, the excavator rover is designed to dig resources below the lunar surface, and the hauler is designed to transport resources to the home base.

## Challenge Tasks

The competition consists of three tasks each encompassing a specific challege one would expect from an ISRU mission with autonomous rovers.

### Task 1: Resource Localization

> The goal of this task is to locate and identify as many resources as possible within the time constraints of the task. -- [NASA SRC Official Rules](https://ninesights.ninesigma.com/apps/IMT/Html/apps/IMT/UploadedFiles/00/f_ed0aa4dc892c366712281fa8db3e0874/SRCPhase2_Official_Rules_rev._06.2020c.pdf?v=1591339613){:target="_blank"}

This task focuses on exploration and mapping as the scout rover must autonomously explore while avoiding obstacles to identify and map resources.

### Task 2: Resource Collection

> The goal of this task is to excavate and collect as many resources as possible within the time constraints of the task. -- [NASA SRC Official Rules](https://ninesights.ninesigma.com/apps/IMT/Html/apps/IMT/UploadedFiles/00/f_ed0aa4dc892c366712281fa8db3e0874/SRCPhase2_Official_Rules_rev._06.2020c.pdf?v=1591339613){:target="_blank"}

This task deals with path planning, manipulation, and coordination of a robot team as the excavator and hauler rovers must autonomously collect resources at known locations.

### Task 3: Self-localization

> The goal of this task is to demonstrate self-localization of a robotic system. -- [NASA SRC Official Rules](https://ninesights.ninesigma.com/apps/IMT/Html/apps/IMT/UploadedFiles/00/f_ed0aa4dc892c366712281fa8db3e0874/SRCPhase2_Official_Rules_rev._06.2020c.pdf?v=1591339613){:target="_blank"}

This task deals with localization as the scout rover must correctly find a CubeSat and return to the home base in a correct alignment.
