import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Repports 2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Repports 3',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Products',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Team',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Repports 2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Repports 3',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Support',
        icon: <FaIcons.FaCartPlus />
    },
]