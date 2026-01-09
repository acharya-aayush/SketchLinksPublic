
export enum GamePhase {
  LOBBY = 'LOBBY',
  WORD_SELECT = 'WORD_SELECT',
  DRAWING = 'DRAWING',
  ROUND_OVER = 'ROUND_OVER',
  GAME_OVER = 'GAME_OVER',
}

export interface GameSettings {
  rounds: number;
  drawTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  customWords: string; // Comma separated
}

export interface Point {
  x: number;
  y: number;
}

export interface DrawPoint extends Point {
  color: string;
  width: number;
  isStarting: boolean; // True if this is a new stroke
  isEraser: boolean;
}

export interface FillAction {
  type: 'FILL';
  x: number;
  y: number;
  color: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  senderAvatar?: string; // Optional for system messages
  senderCustomAvatar?: string; // Custom drawn avatar (base64)
  text: string;
  isSystem?: boolean;
  isCorrect?: boolean;
  isClose?: boolean; // New: For close calls
  timestamp: number;
}

export interface Player {
  id: string;
  name: string;
  avatar: string; // Emoji avatar (fallback)
  customAvatar?: string; // Base64 PNG of hand-drawn avatar
  score: number;
  isHost: boolean;
  isDrawer: boolean;
}

export interface GalleryItem {
  id: string;
  word: string;
  drawer: string;
  drawerAvatar?: string;
  drawerCustomAvatar?: string;
  image: string; // Base64 data URL
}

// network events
export type GameEvent = 
  | { type: 'SYNC_STATE'; payload: any }
  | { type: 'SYNC_PLAYERS'; payload: Player[] }
  | { type: 'SYNC_SETTINGS'; payload: GameSettings }
  | { type: 'SYNC_GALLERY'; payload: GalleryItem[] }
  | { type: 'SYNC_DRAWING'; payload: GameEvent[] }
  | { type: 'DRAW'; payload: DrawPoint }
  | { type: 'DRAW_POINT'; payload: DrawPoint }
  | { type: 'STROKE_END' }
  | { type: 'END_STROKE' }
  | { type: 'FILL'; payload: FillAction }
  | { type: 'FILL_CANVAS'; payload: FillAction }
  | { type: 'UNDO_ACTION' }
  | { type: 'CLEAR_CANVAS' }
  | { type: 'CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'PLAYER_JOINED'; payload: Player }
  | { type: 'START_ROUND'; payload: { wordLength: number; drawerId: string } }
  | { type: 'WORD_SELECTED'; payload: { duration: number } }
  | { type: 'UPDATE_SETTINGS'; payload: GameSettings }
  | { type: 'EMOJI_REACTION'; payload: { emoji: string; senderId: string } };

export const TOOLS = {
  PENCIL: 'pencil',
  MARKER: 'marker',
  ERASER: 'eraser',
  FILL: 'fill',
} as const;

export type ToolType = typeof TOOLS[keyof typeof TOOLS];

// color palette
export const COLORS = [
  '#000000', '#4A4A4A', '#9E9E9E', '#FFFFFF', // basics
  '#FF0000', '#FF5722', '#FF9800', '#FFEB3B', // warm
  '#4CAF50', '#00BCD4', '#2196F3', '#9C27B0', // cool
  '#E91E63', '#8BC34A', '#03A9F4', '#795548', // extras
];

// skin tones for avatar stuff
export const SKIN_TONES = [
  '#FFDFC4', '#F0C08A', '#D4A574', '#8D5524', '#5C4033',
];

export const STROKE_WIDTHS = [3, 8, 16, 28];
