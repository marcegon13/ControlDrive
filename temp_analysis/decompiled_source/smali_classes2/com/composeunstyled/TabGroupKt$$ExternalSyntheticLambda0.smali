.class public final synthetic Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lkotlin/jvm/functions/Function1;


# instance fields
.field public final synthetic f$0:Lcom/composeunstyled/TabsRegistry;

.field public final synthetic f$1:Ljava/lang/String;


# direct methods
.method public synthetic constructor <init>(Lcom/composeunstyled/TabsRegistry;Ljava/lang/String;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda0;->f$0:Lcom/composeunstyled/TabsRegistry;

    iput-object p2, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda0;->f$1:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public final invoke(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 2

    .line 0
    iget-object v0, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda0;->f$0:Lcom/composeunstyled/TabsRegistry;

    iget-object v1, p0, Lcom/composeunstyled/TabGroupKt$$ExternalSyntheticLambda0;->f$1:Ljava/lang/String;

    check-cast p1, Landroidx/compose/ui/focus/FocusProperties;

    invoke-static {v0, v1, p1}, Lcom/composeunstyled/TabGroupKt;->$r8$lambda$7_oPzoaK0HOtItjFT-4Agthpk1M(Lcom/composeunstyled/TabsRegistry;Ljava/lang/String;Landroidx/compose/ui/focus/FocusProperties;)Lkotlin/Unit;

    move-result-object p1

    return-object p1
.end method
