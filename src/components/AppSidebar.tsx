import {
  FileText,
  Layers,
  Box,
  BookOpen,
  PanelRight,
  BarChart3,
  Bot,
  CheckCircle,
  Settings,
  Database,
  Bell,
  Navigation,
  Maximize2,
  ArrowRight,
  Users,
  LayoutGrid,
  RefreshCw,
  ShieldOff,
  Shield,
  GitBranch,
  Link,
  Zap,
  Wrench,
  Activity,
  MapPin,
  Eye,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const groups: NavGroup[] = [
  {
    label: "Core",
    items: [
      { title: "Overview", url: "/", icon: FileText },
      { title: "Core Concepts", url: "/core-concepts", icon: Layers },
    ],
  },
  {
    label: "Patterns",
    items: [
      { title: "Object Modal", url: "/patterns/object-modal", icon: Box },
      { title: "Subject Modal", url: "/patterns/subject-modal", icon: BookOpen },
      { title: "Drawer", url: "/patterns/drawer", icon: PanelRight },
      { title: "Analysis Result", url: "/patterns/analysis-result", icon: BarChart3 },
      { title: "AI State Block", url: "/patterns/ai-state-block", icon: Bot },
      { title: "Action Confirmation", url: "/patterns/action-confirmation", icon: CheckCircle },
    ],
  },
  {
    label: "System",
    items: [
      { title: "Orchestration", url: "/system/orchestration", icon: Settings },
      { title: "State Model", url: "/system/state-model", icon: Database },
      { title: "Signals", url: "/system/signals", icon: Bell },
      { title: "Relation Navigation", url: "/system/relation-navigation", icon: Navigation },
    ],
  },
  {
    label: "Interaction",
    items: [
      { title: "Modal over Modal", url: "/interaction/modal-over-modal", icon: Maximize2 },
      { title: "Data → Action", url: "/interaction/data-interpretation-action", icon: ArrowRight },
      { title: "AI → User → Decision", url: "/interaction/ai-user-decision", icon: Users },
      { title: "UI Layers", url: "/interaction/ui-layers", icon: LayoutGrid },
      { title: "AI Loop", url: "/interaction/ai-loop", icon: RefreshCw },
      { title: "Non Blocking", url: "/interaction/non-blocking", icon: ShieldOff },
      { title: "User Control Priority", url: "/interaction/user-control-priority", icon: Shield },
    ],
  },
  {
    label: "Flows",
    items: [
      { title: "Flow Model", url: "/flows/flow-model", icon: GitBranch },
      { title: "Создание события", url: "/flows/create-event", icon: Zap },
      { title: "Связь с риском", url: "/flows/link-risk", icon: Link },
      { title: "Анализ", url: "/flows/analysis", icon: Activity },
      { title: "Применение мер", url: "/flows/apply-measures", icon: Wrench },
      { title: "Работа AI", url: "/flows/ai-work", icon: Bot },
      { title: "Навигация", url: "/flows/navigation", icon: MapPin },
    ],
  },
  {
    label: "Examples",
    items: [
      { title: "Reference Screen", url: "/examples/object-modal-demo", icon: Box },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="px-4 py-5">
          {!collapsed && (
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Norm AI UX
            </span>
          )}
        </div>
        {groups.map((group) => {
          const isGroupActive = group.items.some(
            (item) =>
              item.url === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.url)
          );

          return (
            <Collapsible key={group.label} defaultOpen={isGroupActive} className="group/collapsible">
              <div className="px-2 py-1">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-accent/50 transition-colors">
                  <span>{group.label}</span>
                  {!collapsed && (
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <SidebarMenu className="pl-2">
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          end={item.url === "/"}
                          className="hover:bg-accent/50"
                          activeClassName="bg-accent text-foreground font-medium"
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          {!collapsed && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
