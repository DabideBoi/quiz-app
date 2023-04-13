const mod912 = [
    {
        "question": "Which three types of nodes should be assigned static IP addresses on a network? (Choose three.)",
        "options": [
            "servers",
            "desktop PCs",
            "mobile laptops",
            "printers",
            "gateways",
            "tablets"
        ],
        "correctAnswer": "servers"
    },
    {
        "question": "Why is DHCP for IPv4 preferred for use on large networks?",
        "options": [
            "Large networks send more requests for domain to IP address resolution than do smaller networks.",
            "DHCP uses a reliable transport layer protocol.",
            "It prevents sharing of files that are copyrighted.",
            "It is a more efficient way to manage IPv4 addresses than static address assignment is.",
            "Hosts on large networks require more IPv4 addressing configuration settings than do hosts on small networks."
        ],
        "correctAnswer": "It is a more efficient way to manage IPv4 addresses than static address assignment is."
    },
    {
        "question": "Refer to the exhibit. PC1 is configured to obtain a dynamic IP address from the DHCP server. PC1 has been shut down for two weeks. When PC1 boots and tries to request an available IP address, which destination IP address will PC1 place in the IP header?",
        "options": [
            "192.168.1.1",
            "192.168.1.8",
            "192.168.1.255",
            "255.255.255.255"
        ],
        "correctAnswer": "255.255.255.255"
    },
    {
        "question": "Which message does an IPv4 host use to reply when it receives a DHCPOFFER message from a DHCP server?",
        "options": [
            "DHCPACK",
            "DHCPDISCOVER",
            "DHCPOFFER",
            "DHCPREQUEST"
        ],
        "correctAnswer": "DHCPREQUEST"
    },
    {
        "question": "A host PC is attempting to lease an address through DHCP. What message is sent by the server to let the client know it is able to use the provided IP information?",
        "options": [
            "DHCPDISCOVER",
            "DHCPOFFER",
            "DHCPREQUEST",
            "DHCPACK",
            "DHCPNACK"
        ],
        "correctAnswer": "DHCPACK"
    },
    {
        "question": "How is a DHCPDISCOVER transmitted on a network to reach a DHCP server?",
        "options": [
            "A DHCPDISCOVER message is sent with the IP address of the DHCP server as the destination address.",
            "A DHCPDISCOVER message is sent with a multicast IP address that all DHCP servers listen to as the destination address.",
            "A DHCPDISCOVER message is sent with the broadcast IP address as the destination address.",
            "A DHCPDISCOVER message is sent with the IP address of the default gateway as the destination address."
        ],
        "correctAnswer": "A DHCPDISCOVER message is sent with the broadcast IP address as the destination address."
    },
    {
        "question": "A DHCP server is used to assign IP addresses dynamically to the hosts on a network. The address pool is configured with 172.30.8.0/24. There are 7 printers on this network that need to use reserved static IP addresses from the pool. How many IP addresses in the pool are left to be assigned to other hosts?",
        "options": [
            "254",
            "247",
            "251",
            "249"
        ],
        "correctAnswer": "247"
    },
    {
        "question": "An employee is having connectivity issues. Why might a network technician try to ping the default gateway from the employee laptop?",
        "options": [
            "to verify that an IP address was provided by the DHCP server",
            "to determine if the laptop address is included in the DNS server",
            "to verify that the SVI interface on the switch is configured correctly",
            "to verify connectivity with the device that provides access to remote networks"
        ],
        "correctAnswer": "to verify connectivity with the device that provides access to remote networks"
    },
    {
        "question": "What is the result if the default gateway address is misconfigured on a PC?",
        "options": [
            "The PC cannot communicate with any devices.",
            "The PC can communicate with devices both in remote networks and in the same network.",
            "The PC can communicate with devices in the same network but not with those in remote networks.",
            "The PC can communicate with devices in remote networks but not with those in the same network."
        ],
        "correctAnswer": "The PC can communicate with devices in the same network but not with those in remote networks."
    },
    {
        "question": "Which statement accurately describes dynamic NAT?",
        "options": [
            "It always maps a private IP address to a public IP address.",
            "It provides an automated mapping of inside local to inside global IP addresses.",
            "It provides a mapping of internal host names to IP addresses.",
            "It dynamically provides IP addressing to internal hosts."
        ],
        "correctAnswer": "It provides an automated mapping of inside local to inside global IP addresses."
    },
    {
        "question": "What purpose does NAT64 serve in IPv6?",
        "options": [
            "It converts IPv6 packets into IPv4 packets.",
            "It translates private IPv6 addresses into public IPv6 addresses.",
            "It enables companies to use IPv6 unique local addresses in the network.",
            "It converts regular IPv6 addresses into 64-bit addresses that can be used on the Internet.",
            "It converts the 48-bit MAC address into a 64-bit host address that can be used for automatic host addressing."
        ],
        "correctAnswer": "It converts IPv6 packets into IPv4 packets."
    },
    {
        "question": "Which type of IPv6 address is not routable and used only for communication on a single subnet?",
        "options": [
            "global unicast address",
            "link-local address",
            "loopback address",
            "unique local address",
            "unspecified address"
        ],
        "correctAnswer": "link-local address"
    },
    {
        "question": "How many bits make up the single IPv6 hextet :10CD:?",
        "options": [
            "4",
            "8",
            "16",
            "32"
        ],
        "correctAnswer": "16"
    },
    {
        "question": "What is the valid most compressed format possible of the IPv6 address 2001:0DB8:0000:AB00:0000:0000:0000:1234?",
        "options": [
            "2001:DB8:0:AB00::1234",
            "2001:DB8:0:AB::1234",
            "2001:DB8::AB00::1234",
            "2001:DB8:0:AB:0:1234"
        ],
        "correctAnswer": "2001:DB8:0:AB00::1234"
    },
    {
        "question": "Which three pieces of information are identified by a URL? (Choose three.)",
        "options": [
            "the MAC address of the web server",
            "the protocol that is being used",
            "the domain name that is being accessed",
            "the IP address of the gateway",
            "the version of the browser",
            "the location of the resource"
        ],
        "correctAnswer": "the protocol that is being used"
    },
    {
        "question": "What is an advantage of UDP over TCP?",
        "options": [
            "UDP communication requires less overhead.",
            "UDP communication is more reliable.",
            "UDP reorders segments that are received out of order.",
            "UDP acknowledges received data."
        ],
        "correctAnswer": "UDP communication requires less overhead."
    },
    {
        "question": "Which type of applications are best suited to use UDP as the transport layer protocol?",
        "options": [
            "applications that require flow control",
            "applications that require data to be reassembled in a specific order",
            "applications that require minimal transmission delay",
            "applications that require stateful sessions"
        ],
        "correctAnswer": "applications that require minimal transmission delay"
    },
    {
        "question": "What layer of the TCP/IP suite makes sure that all the data packets of a message arrive safely at the destination?",
        "options": [
            "internet",
            "transport",
            "application",
            "network access"
        ],
        "correctAnswer": "transport"
    },
    {
        "question": "How does a client computer determine what source port number to assign to a UDP header?",
        "options": [
            "The port number is random within the range of dynamic port numbers.",
            "The port number is based on the application that created the data.",
            "The port number is based on a well-known port number that is open on the destination device.",
            "The port number is based on a well-known port number that is assigned to the application on the sending device."
        ],
        "correctAnswer": "The port number is random within the range of dynamic port numbers."
    },
    {
        "question": "What is a socket?",
        "options": [
            "the combination of the source and destination IP address and source and destination Ethernet address",
            "the combination of a source IP address and port number or a destination IP address and port number",
            "the combination of the source and destination sequence and acknowledgment numbers",
            "the combination of the source and destination sequence numbers and port numbers"
        ],
        "correctAnswer": "the combination of a source IP address and port number or a destination IP address and port number"
    },
    {
        "question": "What is the purpose of using a source port number in a TCP communication?",
        "options": [
            "to notify the remote device that the conversation is over",
            "to assemble the segments that arrived out of order",
            "to keep track of multiple conversations between devices",
            "to inquire for a nonreceived segment"
        ],
        "correctAnswer": "to keep track of multiple conversations between devices"
    },
    {
        "question": "Which two protocols are used in the process of sending and receiving emails? (Choose two.)",
        "options": [
            "HTTP",
            "POP",
            "SSH",
            "SMTP",
            "FTP"
        ],
        "correctAnswer": "POP"
    },
    {
        "question": "What is a function of a DNS server?",
        "options": [
            "It determines the IP address that is associated with a specific host domain name.",
            "It maps IP addresses to physical addresses.",
            "It translates private IP addresses to public IP addresses.",
            "It assigns logical address information to host computers."
        ],
        "correctAnswer": "It determines the IP address that is associated with a specific host domain name."
    },
    {
        "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
        "options": [
            "192.168.10.1",
            "192.168.10.100",
            "209.165.201.3",
            "209.165.201.4"
        ],
        "correctAnswer": "209.165.201.4"
    },
    {
        "question": "Open the PT Activity. Perform the tasks in the activity instructions and then answer the question.",
        "options": [
            "A secure web server is the way to go!",
            "A web server should run secure services!",
            "A web server provides secure communication!",
            "A secure web server is running!"
        ],
        "correctAnswer": "A secure web server is the way to go!"
    },
    {
        "question": "Which two applications provide virtual terminal access to remote servers? (Choose two.)",
        "options": [
            "SSH",
            "DNS",
            "DHCP",
            "SMTP",
            "Telnet"
        ],
        "correctAnswer": "SSH"
    },
    {
        "question": "What type of server would use IMAP?",
        "options": [
            "DNS",
            "DHCP",
            "email",
            "FTP",
            "Telnet"
        ],
        "correctAnswer": "email"
    }
]
