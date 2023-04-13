const mod58 = [
    {
        "question": "What is the purpose of protocols in data communications?",
        "options": [
            "specifying the bandwidth of the channel or medium for each type of communication",
            "specifying the device operating systems that will support the communication",
            "providing the rules required for a specific type of communication to occur",
            "dictating the content of the message sent during communication"
        ],
        "correctAnswer": "providing the rules required for a specific type of communication to occur"
    },
    {
        "question": "Which two OSI model layers have the same functionality as two layers of the TCP/IP model? (Choose two.)",
        "options": [
            "data link",
            "network",
            "physical",
            "session",
            "transport"
        ],
        "correctAnswer": "network"
    },
    {
        "question": "Which three layers of the OSI model map to the application layer of the TCP/IP model? (Choose three.)",
        "options": [
            "application",
            "presentation",
            "session",
            "data link",
            "transport",
            "network"
        ],
        "correctAnswer": "application"
    },
    {
        "question": "Which type of network model describes the functions that must be completed at a particular layer, but does not specify exactly how each protocol should work?",
        "options": [
            "TCP/IP model",
            "protocol model",
            "reference model",
            "hierarchical design model"
        ],
        "correctAnswer": "reference model"
    },
    {
        "question": "The Institute of Electrical and Electronics Engineers is responsible for standards in which two areas? (Choose two.)",
        "options": [
            "TCP/IP technologies",
            "the OSI reference model",
            "wireless LANs",
            "peer-to-peer application compliance",
            "Ethernet media access control",
            "IP address allocation and management"
        ],
        "correctAnswer": "wireless LANs"
    },
    {
        "question": "Which statement is true about MAC addresses?",
        "options": [
            "MAC addresses are implemented by software.",
            "A NIC only needs a MAC address if connected to a WAN.",
            "The first three bytes are used by the vendor assigned OUI.",
            "The ISO is responsible for MAC addresses regulations."
        ],
        "correctAnswer": "The first three bytes are used by the vendor assigned OUI."
    },
    {
        "question": "What is indicated by the 100 in the 100BASE-T standard?\u200b",
        "options": [
            "meters",
            "feet",
            "megabits per second",
            "twists per meter"
        ],
        "correctAnswer": "megabits per second"
    },
    {
        "question": "What process is used to place one message inside another message for transfer from the source to the destination?",
        "options": [
            "access control",
            "decoding",
            "encapsulation",
            "flow control"
        ],
        "correctAnswer": "encapsulation"
    },
    {
        "question": "Which logical address is used for delivery of data to a remote network?",
        "options": [
            "destination MAC address",
            "destination IP address",
            "destination port number",
            "source MAC address",
            "source IP address"
        ],
        "correctAnswer": "destination IP address"
    },
    {
        "question": "What are the three layers of a hierarchical network design model? (Choose three.)",
        "options": [
            "network",
            "Internet",
            "access",
            "core",
            "application",
            "distribution"
        ],
        "correctAnswer": "access"
    },
    {
        "question": "What addressing information is recorded by a switch to build its MAC address table?",
        "options": [
            "the destination Layer 3 address of incoming packets",
            "the destination Layer 2 address of outgoing frames",
            "the source Layer 3 address of outgoing packets",
            "the source Layer 2 address of incoming frames"
        ],
        "correctAnswer": "the source Layer 2 address of incoming frames"
    },
    {
        "question": "A small publishing company has a network design such that when a broadcast is sent on the LAN, 200 devices receive the transmitted broadcast. How can the network administrator reduce the number of devices that receive broadcast traffic?",
        "options": [
            "Add more switches so that fewer devices are on a particular switch.",
            "Replace the switches with switches that have more ports per switch. This will allow more devices on a particular switch.",
            "Segment the LAN into smaller LANs and route between them.",
            "Replace at least half of the switches with hubs to reduce the size of the broadcast domain."
        ],
        "correctAnswer": "Segment the LAN into smaller LANs and route between them."
    },
    {
        "question": "What action does the ARP process take when a host needs to build a frame, but the ARP cache does not contain an address mapping?",
        "options": [
            "The ARP process sends out an ARP request to the Ethernet broadcast address to discover the IPv4 address of the destination device.",
            "The ARP process sends out an ARP request to the IPv4 broadcast address to discover the MAC address of the destination device.",
            "The ARP process sends out an ARP request to the IPv4 broadcast address to discover the IPv4 address of the destination device.",
            "The ARP process sends out an ARP request to the Ethernet broadcast address to discover the MAC address of the destination device."
        ],
        "correctAnswer": "The ARP process sends out an ARP request to the Ethernet broadcast address to discover the MAC address of the destination device."
    },
    {
        "question": "What will a Cisco LAN switch do if it receives an incoming frame and the destination MAC address is not listed in the MAC address table?",
        "options": [
            "Drop the frame.",
            "Send the frame to the default gateway address.",
            "Use ARP to resolve the port that is related to the frame.",
            "Forward the frame out all ports except the port where the frame is received."
        ],
        "correctAnswer": "Forward the frame out all ports except the port where the frame is received."
    },
    {
        "question": "Which two functions are primary functions of a router? (Choose two.)",
        "options": [
            "packet forwarding",
            "microsegmentation",
            "domain name resolution",
            "path selection",
            "flow control"
        ],
        "correctAnswer": "packet forwarding"
    },
    {
        "question": "Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?",
        "options": [
            "It is the IP address of the Router1 interface that connects the company to the Internet.",
            "It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.",
            "It is the IP address of Switch1 that connects PC1 to other devices on the same LAN.",
            "It is the IP address of the ISP network device located in the cloud."
        ],
        "correctAnswer": "It is the IP address of the Router1 interface that connects the PC1 LAN to Router1."
    },
    {
        "question": "A computer can access devices on the same network but cannot access devices on other networks. What is the probable cause of this problem?",
        "options": [
            "The cable is not connected properly to the NIC.",
            "The computer has an invalid IP address.",
            "The computer has an incorrect subnet mask.",
            "The computer has an invalid default gateway address."
        ],
        "correctAnswer": "The computer has an invalid default gateway address."
    },
    {
        "question": "A router receives an incoming packet and determines that the packet should be forwarded to a remote destination host. What will the router do to forward the packet?",
        "options": [
            "It encapsulates the frame with a source IP address by using the specific IP address of the destination host.",
            "It encapsulates the frame with a destination MAC address by using the specific MAC address of the destination host device.",
            "It encapsulates the frame with the destination IP address by using the specific IP address configured on the interface of the next hop router.",
            "It encapsulates the frame with the destination MAC address by using the MAC address of the interface of the next-hop router."
        ],
        "correctAnswer": "It encapsulates the frame with the destination MAC address by using the MAC address of the interface of the next-hop router."
    },
    {
        "question": "A router is receiving a stream of incoming packets and does not contain a route to the remote destination network. What configuration can a network administrator issue in order to successfully forward the incoming packets?",
        "options": [
            "Add a default route.",
            "Enable a dynamic routing protocol.",
            "Share the routing table with the hosts on the local network.",
            "Change the IP address of the ingress interface to match the targeted destination network."
        ],
        "correctAnswer": "Add a default route."
    },
    {
        "question": "Which two parts are components of an IPv4 address? (Choose two.)",
        "options": [
            "subnet portion",
            "network portion",
            "logical portion",
            "host portion",
            "physical portion",
            "broadcast portion"
        ],
        "correctAnswer": "network portion"
    },
    {
        "question": "When a host sends a packet, how does it determine if the destination of the packet is on the same local network or on a remote network?",
        "options": [
            "It checks to see if the default gateway is configured.",
            "It compares the source and destination MAC addresses.",
            "It queries the DNS server with the destination IP address.",
            "It uses the subnet mask to compare the source and destination IP address."
        ],
        "correctAnswer": "It uses the subnet mask to compare the source and destination IP address."
    },
    {
        "question": "What is the default subnet mask for an IP address of 198.133.219.4?",
        "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        "correctAnswer": "255.255.255.0"
    },
    {
        "question": "Which three IP addresses are private ? (Choose three.)",
        "options": [
            "10.1.1.1",
            "172.32.5.2",
            "192.167.10.10",
            "172.16.4.4",
            "192.168.5.5",
            "224.6.6.6"
        ],
        "correctAnswer": "10.1.1.1"
    },
    {
        "question": "What type of message is sent to a specific group of hosts?",
        "options": [
            "unicast",
            "dynamic",
            "multicast",
            "broadcast"
        ],
        "correctAnswer": "multicast"
    },
    {
        "question": "Which IP address is a unicast address if a default subnet mask is used?",
        "options": [
            "201.34.45.0",
            "192.16.43.67",
            "226.34.15.78",
            "195.124.45.255"
        ],
        "correctAnswer": "192.16.43.67"
    }
]
