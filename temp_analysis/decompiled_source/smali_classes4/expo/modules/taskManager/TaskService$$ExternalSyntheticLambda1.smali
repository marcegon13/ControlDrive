.class public final synthetic Lexpo/modules/taskManager/TaskService$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lexpo/modules/core/interfaces/Consumer;


# instance fields
.field public final synthetic f$0:Lexpo/modules/taskManager/TaskService;

.field public final synthetic f$1:Ljava/lang/String;


# direct methods
.method public synthetic constructor <init>(Lexpo/modules/taskManager/TaskService;Ljava/lang/String;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lexpo/modules/taskManager/TaskService$$ExternalSyntheticLambda1;->f$0:Lexpo/modules/taskManager/TaskService;

    iput-object p2, p0, Lexpo/modules/taskManager/TaskService$$ExternalSyntheticLambda1;->f$1:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public final apply(Ljava/lang/Object;)V
    .locals 2

    .line 0
    iget-object v0, p0, Lexpo/modules/taskManager/TaskService$$ExternalSyntheticLambda1;->f$0:Lexpo/modules/taskManager/TaskService;

    iget-object v1, p0, Lexpo/modules/taskManager/TaskService$$ExternalSyntheticLambda1;->f$1:Ljava/lang/String;

    check-cast p1, Ljava/lang/Boolean;

    invoke-static {v0, v1, p1}, Lexpo/modules/taskManager/TaskService;->$r8$lambda$-5YP0-30DR1POShRl_qt0tLk-hI(Lexpo/modules/taskManager/TaskService;Ljava/lang/String;Ljava/lang/Boolean;)V

    return-void
.end method
