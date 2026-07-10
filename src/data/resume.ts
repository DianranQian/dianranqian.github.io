// ============================================================
// 个人简历数据
// 修改此文件即可更新所有页面内容
// ============================================================

export const personalInfo = {
  name: 'DianranQian',
  title: 'Rust 开发工程师',
  tagline: 'Rust Developer | Building Game Engine Systems with ECS',
  subtitle: '从计算机系统原理出发，构建高性能游戏与系统软件',
  email: '2594360109@qq.com',
  github: 'https://github.com/DianranQian',
  location: '中国',
};

export const aboutText = {
  paragraphs: [
    '我从底层开始系统学习计算机技术。学习路线从 CPU 和内存出发，逐步向上理解操作系统、编译器、网络协议和数据库原理。在此基础上深入学习 Rust 和 C 语言，并将系统知识应用到游戏引擎和 3D 游戏开发中。',
    '我相信，理解计算机系统的工作原理——而不仅仅是调用 API——是构建可靠、高性能软件的基石。这种自底向上的学习路径，让我能够从更本质的层面理解和解决问题。',
  ],
  highlights: [
    { label: '学习路线', value: 'CPU → 内存 → OS → 编译器 → 编程语言 → 游戏引擎' },
    { label: '技术理念', value: '理解原理，而不是调用 API' },
  ],
};

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: 'familiar' | 'proficient' | 'learning' }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: '编程语言',
    icon: '🔧',
    skills: [
      { name: 'Rust', level: 'proficient' },
      { name: 'C', level: 'proficient' },
      { name: 'Python', level: 'familiar' },
      { name: 'Shell', level: 'familiar' },
    ],
  },
  {
    title: 'Rust 生态',
    icon: '🦀',
    skills: [
      { name: 'Ownership & Borrowing', level: 'proficient' },
      { name: 'Trait & Generics', level: 'proficient' },
      { name: '生命周期', level: 'proficient' },
      { name: 'ECS 架构设计', level: 'proficient' },
      { name: 'Cargo 工程管理', level: 'familiar' },
    ],
  },
  {
    title: '系统基础',
    icon: '⚙️',
    skills: [
      { name: 'Linux 开发环境', level: 'proficient' },
      { name: '进程 / 线程模型', level: 'proficient' },
      { name: '内存管理', level: 'familiar' },
      { name: '文件系统', level: 'familiar' },
      { name: '网络协议', level: 'familiar' },
      { name: '性能分析', level: 'learning' },
    ],
  },
  {
    title: '游戏开发',
    icon: '🎮',
    skills: [
      { name: 'Bevy Engine', level: 'proficient' },
      { name: 'ECS 设计模式', level: 'proficient' },
      { name: '3D 场景管理', level: 'familiar' },
      { name: '动画系统', level: 'familiar' },
      { name: '物理引擎 (Avian)', level: 'familiar' },
      { name: 'AI 状态机', level: 'familiar' },
      { name: 'UI 系统', level: 'familiar' },
    ],
  },
];

export interface ProjectModule {
  title: string;
  items: string[];
}

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  githubUrl: string;
  imagePlaceholder: string;
  modules: ProjectModule[];
}

export const projects: Project[] = [
  {
    name: 'game_demo',
    subtitle: '第三人称角色控制 Demo · Bevy 0.19 + Avian3d',
    description:
      '独立开发的 Rust Bevy 引擎 3D 游戏 Demo。实现了完整的第三人称角色控制、战斗、NPC 交互、对话、背包、小地图和世界流式加载系统。',
    tech: ['Rust', 'Bevy 0.19', 'Avian3d', 'GLTF', 'ECS', 'RON'],
    githubUrl: 'https://github.com/DianranQian/game_demo',
    imagePlaceholder: '/placeholder-project.png',
    modules: [
      {
        title: '移动系统',
        items: [
          'WASD 移动（行走 4 m/s，奔跑 8 m/s）',
          '跳跃与冲刺（攻击时自动触发，速度 40，持续 0.35s）',
          '环绕相机 + Ctrl 滚轮缩放',
        ],
      },
      {
        title: '战斗系统',
        items: [
          '鼠标左键攻击，120° 扇形检测（范围 4m）',
          '伤害 50 HP + 击退 + 受击闪烁反馈',
          '死亡动画 → 1.5s 后敌人消失，攻击冷却 0.4s',
        ],
      },
      {
        title: 'NPC 系统',
        items: [
          '场景自动生成（NPC_ 前缀实体）',
          '巡逻行为：随机移动 + 等待，5m 内检测玩家停止巡逻',
          'E 键对话交互，Kinematic 刚体地面吸附',
        ],
      },
      {
        title: '对话系统',
        items: [
          'RON 配置文件驱动，多选项对话树',
          '条件分支：物品检查、任务标记',
        ],
      },
      {
        title: '背包与工具栏',
        items: [
          '32 格背包（8×4），物品堆叠与拾取',
          '拖拽交换（背包 ↔ 工具栏）',
          '9 格快捷栏，数字键 / 滚轮切换，F 键使用物品',
        ],
      },
      {
        title: '小地图与世界流式加载',
        items: [
          'CPU 噪声采样小地图，圆形裁剪，M 键大地图 + WASD 平移',
          '噪声地形生成 + 区块流式加载/卸载',
          'world.ron 配置驱动世界参数',
        ],
      },
    ],
  },
];

export interface CSLayer {
  label: string;
  items: string[];
}

export const csFoundation: CSLayer[] = [
  {
    label: '应用层',
    items: ['游戏引擎', '应用开发'],
  },
  {
    label: '编程语言',
    items: ['Rust', 'C'],
  },
  {
    label: '编译 / 运行时',
    items: ['编译器原理', '链接与加载'],
  },
  {
    label: '操作系统',
    items: ['Linux', '进程管理', '内存管理', '文件系统', 'I/O'],
  },
  {
    label: '计算机架构',
    items: ['CPU', '内存', '中断', '总线'],
  },
  {
    label: '网络 & 数据库',
    items: ['TCP/IP', 'HTTP', '关系型数据库'],
  },
];

export interface TimelineEvent {
  period: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    period: '第一阶段',
    title: '计算机基础学习',
    description:
      '从 C 语言和数据结构入手，系统学习计算机组成原理、操作系统、网络和编译原理。建立对计算机系统的底层认知。',
  },
  {
    period: '第二阶段',
    title: '深入学习系统编程',
    description:
      '深入学习 Linux 系统编程，理解进程线程模型、内存管理、文件系统和网络编程。开始使用 Rust 进行项目开发。',
  },
  {
    period: '第三阶段',
    title: '游戏引擎探索',
    description:
      '学习 ECS 架构思想和 Bevy 引擎。从系统编程转向游戏开发，将底层知识应用在 3D 游戏场景中。',
  },
  {
    period: '现阶段',
    title: 'game_demo：Bevy 3D 游戏开发',
    description:
      '使用 Rust + Bevy 0.19 + Avian3d 开发第三人称 3D 游戏 Demo。实现移动、战斗、NPC AI、对话树、背包拖拽、小地图和世界流式加载系统。持续迭代中。',
  },
];
