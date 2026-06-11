export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface Chapter {
  slug: string,
  title: string,
  description: string,
  icon: React.ElementType,
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
  duration: string,
  color: string,
  lessonCount: number,
}