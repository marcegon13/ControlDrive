.class public final synthetic Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lkotlin/jvm/functions/Function2;


# instance fields
.field public final synthetic f$0:Lcom/composables/core/DialogScope;

.field public final synthetic f$1:Landroidx/compose/ui/Modifier;

.field public final synthetic f$10:I

.field public final synthetic f$2:Landroidx/compose/animation/EnterTransition;

.field public final synthetic f$3:Landroidx/compose/animation/ExitTransition;

.field public final synthetic f$4:Landroidx/compose/ui/graphics/Shape;

.field public final synthetic f$5:J

.field public final synthetic f$6:J

.field public final synthetic f$7:Landroidx/compose/foundation/layout/PaddingValues;

.field public final synthetic f$8:Lkotlin/jvm/functions/Function2;

.field public final synthetic f$9:I


# direct methods
.method public synthetic constructor <init>(Lcom/composables/core/DialogScope;Landroidx/compose/ui/Modifier;Landroidx/compose/animation/EnterTransition;Landroidx/compose/animation/ExitTransition;Landroidx/compose/ui/graphics/Shape;JJLandroidx/compose/foundation/layout/PaddingValues;Lkotlin/jvm/functions/Function2;II)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$0:Lcom/composables/core/DialogScope;

    iput-object p2, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$1:Landroidx/compose/ui/Modifier;

    iput-object p3, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$2:Landroidx/compose/animation/EnterTransition;

    iput-object p4, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$3:Landroidx/compose/animation/ExitTransition;

    iput-object p5, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$4:Landroidx/compose/ui/graphics/Shape;

    iput-wide p6, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$5:J

    iput-wide p8, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$6:J

    iput-object p10, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$7:Landroidx/compose/foundation/layout/PaddingValues;

    iput-object p11, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$8:Lkotlin/jvm/functions/Function2;

    iput p12, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$9:I

    iput p13, p0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$10:I

    return-void
.end method


# virtual methods
.method public final invoke(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 16

    .line 0
    move-object/from16 v0, p0

    iget-object v1, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$0:Lcom/composables/core/DialogScope;

    iget-object v2, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$1:Landroidx/compose/ui/Modifier;

    iget-object v3, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$2:Landroidx/compose/animation/EnterTransition;

    iget-object v4, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$3:Landroidx/compose/animation/ExitTransition;

    iget-object v5, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$4:Landroidx/compose/ui/graphics/Shape;

    iget-wide v6, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$5:J

    iget-wide v8, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$6:J

    iget-object v10, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$7:Landroidx/compose/foundation/layout/PaddingValues;

    iget-object v11, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$8:Lkotlin/jvm/functions/Function2;

    iget v12, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$9:I

    iget v13, v0, Lcom/composables/core/DialogKt$$ExternalSyntheticLambda2;->f$10:I

    move-object/from16 v14, p1

    check-cast v14, Landroidx/compose/runtime/Composer;

    move-object/from16 v15, p2

    check-cast v15, Ljava/lang/Integer;

    invoke-virtual {v15}, Ljava/lang/Integer;->intValue()I

    move-result v15

    invoke-static/range {v1 .. v15}, Lcom/composables/core/DialogKt;->$r8$lambda$pHBmndthw9b_G1SASVQOzXKa43s(Lcom/composables/core/DialogScope;Landroidx/compose/ui/Modifier;Landroidx/compose/animation/EnterTransition;Landroidx/compose/animation/ExitTransition;Landroidx/compose/ui/graphics/Shape;JJLandroidx/compose/foundation/layout/PaddingValues;Lkotlin/jvm/functions/Function2;IILandroidx/compose/runtime/Composer;I)Lkotlin/Unit;

    move-result-object v1

    return-object v1
.end method
